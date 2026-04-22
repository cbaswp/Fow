// ====== CALCULADORA DE FABRICACIÓN ======

// Traducciones
const craftTranslations = {
    es: {
        rarityRare: "Raro",
        rarityEpic: "Epico",
        rarityLegendary: "Legendario",
        typeWeapon: "Armas",
        typeArmor: "Armadura",
        typeAccessory: "Accesorios",
        typeGarra: "Garra",
        typeOjo: "Ojo",
        itemsBase: "Items Base",
        itemsSecundary: "Items Secundarios",
        steelNeeded: "Acero/Platino",
        basicResources: "Recursos Básicos",
        specialResources: "Recursos Especiales",
        noNeed: "No necesitas este material"
    },
    pt: {
        rarityRare: "Raro",
        rarityEpic: "Epico",
        rarityLegendary: "Legendario",
        typeWeapon: "Armas",
        typeArmor: "Armadura",
        typeAccessory: "Acessórios",
        typeGarra: "Garra",
        typeOjo: "Olho",
        itemsBase: "Itens Base",
        itemsSecundary: "Itens Secundários",
        steelNeeded: "Aço/Platina",
        basicResources: "Recursos Básicos",
        specialResources: "Recursos Especiais",
        noNeed: "Não precisa deste material"
    },
    en: {
        rarityRare: "Rare",
        rarityEpic: "Epic",
        rarityLegendary: "Legendary",
        typeWeapon: "Weapons",
        typeArmor: "Armor",
        typeAccessory: "Accessories",
        typeGarra: "Claw",
        typeOjo: "Eye",
        itemsBase: "Base Items",
        itemsSecundary: "Secondary Items",
        steelNeeded: "Steel/Platinum",
        basicResources: "Basic Resources",
        specialResources: "Special Resources",
        noNeed: "You don't need this material"
    }
};

// Fondos por rareza
const fondosRarity = {
    rare: 'images/Fondo raro.png',
    epic: 'images/Fondo epico.png',
    legendary: 'images/Fondo legendario.png'
};

// Recetas: [base, steel, polvo, polvoB, hierro, dragonS, cobre, ds]
const recipes = {
    weapon: {
        rare:    { base: 10, steel: 3, polvo: 125, polvoB: 0, hierro: 0, dragonS: 0, cobre: 4000, ds: 1000 },
        epic:    { base: 100, steel: 30, polvo: 1250, polvoB: 25, hierro: 5000, dragonS: 0, cobre: 20000, ds: 10000 },
        legendary:{ base: 1000, steel: 300, polvo: 12500, polvoB: 125, hierro: 25000, dragonS: 5000, cobre: 100000, ds: 50000 }
    },
    armor: {
        rare:    { base: 10, steel: 3, polvo: 125, polvoB: 0, hierro: 0, dragonS: 0, cobre: 4000, ds: 1000 },
        epic:    { base: 100, steel: 30, polvo: 1250, polvoB: 25, hierro: 5000, dragonS: 0, cobre: 20000, ds: 10000 },
        legendary:{ base: 1000, steel: 300, polvo: 12500, polvoB: 125, hierro: 25000, dragonS: 5000, cobre: 100000, ds: 50000 }
    },
    accessory: {
        rare:    { base: 10, steel: 3, polvo: 125, polvoB: 0, hierro: 0, dragonS: 0, cobre: 4000, ds: 1000 },
        epic:    { base: 100, steel: 30, polvo: 1250, polvoB: 25, hierro: 5000, dragonS: 0, cobre: 20000, ds: 10000 },
        legendary:{ base: 1000, steel: 300, polvo: 12500, polvoB: 125, hierro: 25000, dragonS: 5000, cobre: 100000, ds: 50000 }
    }
};

let currentType = 'weapon';
let currentRarity = 'legendary';

function formatNum(n) {
    return n.toLocaleString('es-ES');
}

function setActiveBtn(btns, active) {
    btns.forEach(b => b.classList.remove('active'));
    active.classList.add('active');
}

// Inicializar eventos
function initCrafting() {
    // Botones de categoría
    const armaswitch = document.getElementById('armaswitch');
    const ropaswitch = document.getElementById('ropaswitch');
    const hornswitch = document.getElementById('hornswitch');
    const garraR = document.getElementById('garraR');
    const ojitoR = document.getElementById('ojitoR');

    if (armaswitch) armaswitch.addEventListener('click', function() {
        currentType = 'weapon';
        setActiveBtn([this, ropaswitch, hornswitch, garraR, ojitoR], this);
        calcular();
    });
    if (ropaswitch) ropaswitch.addEventListener('click', function() {
        currentType = 'armor';
        setActiveBtn([armaswitch, this, hornswitch, garraR, ojitoR], this);
        calcular();
    });
    if (hornswitch) hornswitch.addEventListener('click', function() {
        currentType = 'accessory';
        setActiveBtn([armaswitch, ropaswitch, this, garraR, ojitoR], this);
        calcular();
    });
    if (garraR) garraR.addEventListener('click', function() {
        currentType = 'garra';
        setActiveBtn([armaswitch, ropaswitch, hornswitch, this, ojitoR], this);
        calcular();
    });
    if (ojitoR) ojitoR.addEventListener('click', function() {
        currentType = 'ojo';
        setActiveBtn([armaswitch, ropaswitch, hornswitch, garraR, this], this);
        calcular();
    });

    // Botones de rareza
    document.querySelectorAll('.rare-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentRarity = this.dataset.rarity;
            setActiveBtn(Array.from(document.querySelectorAll('.rare-btn')), this);
            calcular();
        });
    });

    // Auto-calcular
    document.querySelectorAll('.inv-item input').forEach(input => {
        input.addEventListener('input', calcular);
    });

    calcular();
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCrafting);
} else {
    initCrafting();
}

function calcular() {
    const lang = localStorage.getItem('mir4-lang') || 'es';
    const t = craftTranslations[lang];
    const recipe = recipes[currentType] || recipes.weapon;

    // Inventario
    const baseV = parseInt(document.getElementById('baseV')?.value) || 0;
    const baseA = parseInt(document.getElementById('baseA')?.value) || 0;
    const baseR = parseInt(document.getElementById('baseR')?.value) || 0;

    const secV = parseInt(document.getElementById('secV')?.value) || 0;
    const secA = parseInt(document.getElementById('secA')?.value) || 0;
    const secR = parseInt(document.getElementById('secR')?.value) || 0;

    const steelV = parseInt(document.getElementById('steelV')?.value) || 0;
    const steelA = parseInt(document.getElementById('steelA')?.value) || 0;
    const steelR = parseInt(document.getElementById('steelR')?.value) || 0;

    const polvo = parseInt(document.getElementById('polvoi')?.value) || 0;
    const cobre = parseInt(document.getElementById('cobrei')?.value) || 0;
    const monedas = (parseInt(document.getElementById('mplata')?.value) || 0) * 10000;
    const ds = parseInt(document.getElementById('dsi')?.value) || 0;
    const polvoB = parseInt(document.getElementById('polvob')?.value) || 0;
    const hierro = parseInt(document.getElementById('hierroo')?.value) || 0;
    const dragonS = parseInt(document.getElementById('dragons')?.value) || 0;

    // Cálculos
    const nBaseV = Math.max(0, recipe.base - baseV);
    const nBaseA = Math.max(0, recipe.base - baseA);
    const nBaseR = Math.max(0, recipe.base - baseR);

    const nSecV = Math.max(0, recipe.base - secV);
    const nSecA = Math.max(0, recipe.base - secA);
    const nSecR = Math.max(0, recipe.base - secR);

    const nSteelV = Math.max(0, recipe.steel - steelV);
    const nSteelA = Math.max(0, recipe.steel - steelA);
    const nSteelR = Math.max(0, recipe.steel - steelR);

    const nPolvo = Math.max(0, recipe.polvo - polvo);
    const nCobre = Math.max(0, recipe.cobre - cobre - monedas);
    const nDs = Math.max(0, recipe.ds - ds);
    const nPolvoB = Math.max(0, recipe.polvoB - polvoB);
    const nHierro = Math.max(0, recipe.hierro - hierro);
    const nDragonS = Math.max(0, recipe.dragonS - dragonS);

    // Colores por rareza
    const colors = {
        rare: { bg: 'rgba(88, 101, 242, 0.15)', border: '#5865F2', text: '#5865F2' },
        epic: { bg: 'rgba(155, 89, 182, 0.15)', border: '#9b59b6', text: '#9b59b6' },
        legendary: { bg: 'rgba(230, 126, 34, 0.15)', border: '#e67e22', text: '#e67e22' }
    }[currentRarity];

    // Fondo según rareza
    const fondoImg = fondosRarity[currentRarity];

    // Nombre del tipo para mostrar
    let typeName = t['type' + currentType.charAt(0).toUpperCase() + currentType.slice(1)] || currentType;
    let typeIcon = currentType;
    if (currentType === 'garra') typeIcon = 'garra';
    else if (currentType === 'ojo') typeIcon = 'ojo';

    // Imágenes por tipo de equipo para el resultado
    const resultImages = {
        weapon: {
            base: { v: 'pslv', a: 'psla', r: 'pslr', nameV: 'PSL Verde', nameA: 'PSL Azul', nameR: 'PSL Rojo' },
            sec: { v: 'omv', a: 'oma', r: 'omr', nameV: 'OM Verde', nameA: 'OM Azul', nameR: 'OM Rojo' },
            steel: { v: 'acerov', a: 'aceroa', r: 'aceror', nameV: 'Acero Verde', nameA: 'Acero Azul', nameR: 'Acero Rojo' }
        },
        armor: {
            base: { v: 'quintaesenciav', a: 'quintaesenciaa', r: 'quintaesenciar', nameV: 'Quintessence Verde', nameA: 'Quintessence Azul', nameR: 'Quintessence Rojo' },
            sec: { v: 'baratijav', a: 'baratijaa', r: 'baratijar', nameV: 'Baratija Verde', nameA: 'Baratija Azul', nameR: 'Baratija Rojo' },
            steel: { v: 'acerov', a: 'aceroa', r: 'aceror', nameV: 'Acero Verde', nameA: 'Acero Azul', nameR: 'Acero Rojo' }
        },
        accessory: {
            base: { v: 'fragv', a: 'fraga', r: 'fragr', nameV: 'Frag Verde', nameA: 'Frag Azul', nameR: 'Frag Rojo' },
            sec: { v: 'piedrav', a: 'piedraa', r: 'piedrar', nameV: 'Piedra Verde', nameA: 'Piedra Azul', nameR: 'Piedra Rojo' },
            steel: { v: 'platinov', a: 'platinoa', r: 'platinor', nameV: 'Platino Verde', nameA: 'Platino Azul', nameR: 'Platino Rojo' }
        },
        garra: {
            base: { v: 'pslv', a: 'psla', r: 'pslr', nameV: 'PSL Verde', nameA: 'PSL Azul', nameR: 'PSL Rojo' },
            sec: { v: 'omv', a: 'oma', r: 'omr', nameV: 'OM Verde', nameA: 'OM Azul', nameR: 'OM Rojo' },
            steel: { v: 'acerov', a: 'aceroa', r: 'aceror', nameV: 'Acero Verde', nameA: 'Acero Azul', nameR: 'Acero Rojo' }
        },
        ojo: {
            base: { v: 'fragv', a: 'fraga', r: 'fragr', nameV: 'Frag Verde', nameA: 'Frag Azul', nameR: 'Frag Rojo' },
            sec: { v: 'piedrav', a: 'piedraa', r: 'piedrar', nameV: 'Piedra Verde', nameA: 'Piedra Azul', nameR: 'Piedra Rojo' },
            steel: { v: 'platinov', a: 'platinoa', r: 'platinor', nameV: 'Platino Verde', nameA: 'Platino Azul', nameR: 'Platino Rojo' }
        }
    };

    const resImg = resultImages[currentType] || resultImages.weapon;

    const resultHTML = `
    <div class="result-with-fondo" style="position: relative; text-align: center;">
        <img src="${fondoImg}" alt="fondo" class="fondo-resultado">
        <div class="result-content-overlay">
            <div class="rarity-label" style="color: ${colors.text};">${t['rarity' + currentRarity.charAt(0).toUpperCase() + currentRarity.slice(1)]}</div>
            <div class="type-label">${typeName}</div>
        </div>
    </div>

    <div class="result-sections">
        <div class="result-section" style="border-left: 4px solid ${colors.border};">
            <h4 style="color: ${colors.text};">${t.itemsBase}</h4>
            <div class="result-row">
                <div class="item-box"><img src="images/${resImg.base.v}.png"><span>${nBaseV}</span><label>${resImg.base.nameV}</label></div>
                <div class="item-box"><img src="images/${resImg.base.a}.png"><span>${nBaseA}</span><label>${resImg.base.nameA}</label></div>
                <div class="item-box"><img src="images/${resImg.base.r}.png"><span>${nBaseR}</span><label>${resImg.base.nameR}</label></div>
            </div>
        </div>

        <div class="result-section" style="border-left: 4px solid ${colors.border};">
            <h4 style="color: ${colors.text};">${t.itemsSecundary}</h4>
            <div class="result-row">
                <div class="item-box"><img src="images/${resImg.sec.v}.png"><span>${nSecV}</span><label>${resImg.sec.nameV}</label></div>
                <div class="item-box"><img src="images/${resImg.sec.a}.png"><span>${nSecA}</span><label>${resImg.sec.nameA}</label></div>
                <div class="item-box"><img src="images/${resImg.sec.r}.png"><span>${nSecR}</span><label>${resImg.sec.nameR}</label></div>
            </div>
        </div>

        <div class="result-section" style="border-left: 4px solid ${colors.border};">
            <h4 style="color: ${colors.text};">${t.steelNeeded}</h4>
            <div class="result-row">
                <div class="item-box"><img src="images/${resImg.steel.v}.png"><span>${nSteelV}</span><label>${resImg.steel.nameV}</label></div>
                <div class="item-box"><img src="images/${resImg.steel.a}.png"><span>${nSteelA}</span><label>${resImg.steel.nameA}</label></div>
                <div class="item-box"><img src="images/${resImg.steel.r}.png"><span>${nSteelR}</span><label>${resImg.steel.nameR}</label></div>
            </div>
        </div>

        <div class="result-section" style="border-left: 4px solid #7289da;">
            <h4 style="color: #7289da;">${t.basicResources}</h4>
            <div class="resources-row">
                <div class="resource-box"><img src="images/polv.png"><span>${formatNum(nPolvo)}</span><label>Polvo</label></div>
                <div class="resource-box"><img src="images/cobreimg.png"><span>${formatNum(nCobre)}</span><label>Cobre</label></div>
                <div class="resource-box"><img src="images/imgds.png"><span>${formatNum(nDs)}</span><label>DS</label></div>
            </div>
        </div>`;

    const specialSection = currentRarity !== 'rare' ? `
        <div class="result-section epic-section" style="border-left: 4px solid ${colors.border};">
            <h4 style="color: ${colors.text};">${t.specialResources}</h4>
            <div class="resources-row">
                <div class="resource-box epic"><img src="images/polvob.png"><span>${formatNum(nPolvoB)}</span><label>Polvo Brillante</label></div>
                <div class="resource-box epic"><img src="images/hierroo.png"><span>${formatNum(nHierro)}</span><label>Hierro Oscuro</label></div>
                <div class="resource-box epic"><img src="images/dragons.png"><span>${formatNum(nDragonS)}</span><label>Dragon Steel</label></div>
            </div>
        </div>` : '';

    const note = `<div class="result-note">${t.noNeed}</div>`;

    document.getElementById('resultado').innerHTML = resultHTML + specialSection + note + '</div>';
}
