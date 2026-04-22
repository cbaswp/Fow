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
        itemsBase: "PSL",
        itemsSecundary: "OM",
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
        itemsBase: "PSL",
        itemsSecundary: "OM",
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
        itemsBase: "PSL",
        itemsSecundary: "OM",
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
// Epic: PSL Verde 10000, PSL Azul 1000, PSL Rojo 100, Acero Verde 30000, Acero Azul 3000, Acero Rojo 300
const recipes = {
    weapon: {
        rare:    { base: 10, steel: 3, polvo: 125, polvoB: 0, hierro: 0, dragonS: 0, cobre: 4000, ds: 1000 },
        epic:    { baseV: 10000, baseA: 1000, baseR: 100, steelV: 30000, steelA: 3000, steelR: 300, polvo: 1250, polvoB: 25, hierro: 5000, dragonS: 0, cobre: 20000, ds: 10000 },
        legendary:{ baseV: 100000, baseA: 10000, baseR: 1000, baseL: 100, steelV: 300000, steelA: 30000, steelR: 3000, steelL: 300, polvo: 12500, polvoB: 125, hierro: 25000, dragonS: 5000, cobre: 100000, ds: 50000 }
    },
    armor: {
        rare:    { base: 10, steel: 3, polvo: 125, polvoB: 0, hierro: 0, dragonS: 0, cobre: 4000, ds: 1000 },
        epic:    { baseV: 10000, baseA: 1000, baseR: 100, steelV: 30000, steelA: 3000, steelR: 300, polvo: 1250, polvoB: 25, hierro: 5000, dragonS: 0, cobre: 20000, ds: 10000 },
        legendary:{ baseV: 100000, baseA: 10000, baseR: 1000, baseL: 100, steelV: 300000, steelA: 30000, steelR: 3000, steelL: 300, polvo: 12500, polvoB: 125, hierro: 25000, dragonS: 5000, cobre: 100000, ds: 50000 }
    },
    accessory: {
        rare:    { base: 10, steel: 3, polvo: 125, polvoB: 0, hierro: 0, dragonS: 0, cobre: 4000, ds: 1000 },
        epic:    { baseV: 10000, baseA: 1000, baseR: 100, steelV: 30000, steelA: 3000, steelR: 300, polvo: 1250, polvoB: 25, hierro: 5000, dragonS: 0, cobre: 20000, ds: 10000 },
        legendary:{ baseV: 100000, baseA: 10000, baseR: 1000, baseL: 100, steelV: 300000, steelA: 30000, steelR: 3000, steelL: 300, polvo: 12500, polvoB: 125, hierro: 25000, dragonS: 5000, cobre: 100000, ds: 50000 }
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
            // Cambiar todos los fundos de tipo según la rareza
            document.querySelectorAll('.item-fondo').forEach(fondo => {
                fondo.src = fondosRarity[currentRarity];
            });
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

    // Obtener tipo y rareza válidos
    const validTypes = ['weapon', 'armor', 'accessory', 'garra', 'ojo'];
    const validRarities = ['rare', 'epic', 'legendary'];
    const safeType = validTypes.includes(currentType) ? currentType : 'weapon';
    const safeRarity = validRarities.includes(currentRarity) ? currentRarity : 'legendary';

    // garra y ojo usan las mismas recetas que weapon
    const recipeType = (safeType === 'garra' || safeType === 'ojo') ? 'weapon' : safeType;
    const recipe = recipes[recipeType]?.[safeRarity] || recipes.weapon.legendary;

    // Inventario
    const getVal = (id) => {
        const el = document.getElementById(id);
        const val = el ? parseInt(el.value, 10) : 0;
        return isNaN(val) ? 0 : val;
    };

    const baseV = getVal('baseV');
    const baseA = getVal('baseA');
    const baseR = getVal('baseR');
    const secV = getVal('secV');
    const secA = getVal('secA');
    const secR = getVal('secR');
    const steelV = getVal('steelV');
    const steelA = getVal('steelA');
    const steelR = getVal('steelR');
    const polvo = getVal('polvoi');
    const cobre = getVal('cobrei');
    const monedas = getVal('mplata') * 10000;
    const ds = getVal('dsi');
    const polvoB = getVal('polvob');
    const hierro = getVal('hierroo');
    const dragonS = getVal('dragons');

    // Cálculos - para Epic y Legendary se usan valores diferentes por color
    const isEpic = safeRarity === 'epic';
    const isLegendary = safeRarity === 'legendary';
    const reqBaseV = isEpic ? (recipe.baseV || recipe.base) : (isLegendary ? recipe.baseV : recipe.base);
    const reqBaseA = isEpic ? (recipe.baseA || recipe.base) : (isLegendary ? recipe.baseA : recipe.base);
    const reqBaseR = isEpic ? (recipe.baseR || recipe.base) : (isLegendary ? recipe.baseR : recipe.base);
    const reqBaseL = isLegendary ? recipe.baseL : 0;
    const reqSteelV = isEpic ? (recipe.steelV || recipe.steel) : (isLegendary ? recipe.steelV : recipe.steel);
    const reqSteelA = isEpic ? (recipe.steelA || recipe.steel) : (isLegendary ? recipe.steelA : recipe.steel);
    const reqSteelR = isEpic ? (recipe.steelR || recipe.steel) : (isLegendary ? recipe.steelR : recipe.steel);
    const reqSteelL = isLegendary ? recipe.steelL : 0;

    const nBaseV = Math.max(0, reqBaseV - baseV);
    const nBaseA = Math.max(0, reqBaseA - baseA);
    const nBaseR = Math.max(0, reqBaseR - baseR);
    const nBaseL = Math.max(0, reqBaseL - 0);

    const nSecV = Math.max(0, reqBaseV - secV);
    const nSecA = Math.max(0, reqBaseA - secA);
    const nSecR = Math.max(0, reqBaseR - secR);
    const nSecL = Math.max(0, reqBaseL - 0);

    const nSteelV = Math.max(0, reqSteelV - steelV);
    const nSteelA = Math.max(0, reqSteelA - steelA);
    const nSteelR = Math.max(0, reqSteelR - steelR);
    const nSteelL = Math.max(0, reqSteelL - 0);

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
    const typeKey = 'type' + safeType.charAt(0).toUpperCase() + safeType.slice(1);
    let typeName = t[typeKey] || t[safeType] || safeType;

    // Imágenes por tipo de equipo para el resultado
    // Para Legendary se usan imágenes con sufijo "l" (verde+amarillo, azul+amarillo, rojo+amarillo)
    const resultImages = {
        weapon: {
            base: { v: 'pslv', a: 'psla', r: 'pslr', l: 'psll', nameV: 'PSL Verde', nameA: 'PSL Azul', nameR: 'PSL Rojo', nameL: 'PSL Amarillo' },
            sec: { v: 'omv', a: 'oma', r: 'omr', l: 'oml', nameV: 'OM Verde', nameA: 'OM Azul', nameR: 'OM Rojo', nameL: 'OM Amarillo' },
            steel: { v: 'acerov', a: 'aceroa', r: 'aceror', l: 'acerol', nameV: 'Acero Verde', nameA: 'Acero Azul', nameR: 'Acero Rojo', nameL: 'Acero Amarillo' }
        },
        armor: {
            base: { v: 'quintaesenciav', a: 'quintaesenciaa', r: 'quintaesenciar', l: 'quintaesencial', nameV: 'Quintessence Verde', nameA: 'Quintessence Azul', nameR: 'Quintessence Rojo', nameL: 'Quintessence Amarillo' },
            sec: { v: 'baratijav', a: 'baratijaa', r: 'baratijar', l: 'baratijal', nameV: 'Baratija Verde', nameA: 'Baratija Azul', nameR: 'Baratija Rojo', nameL: 'Baratija Amarillo' },
            steel: { v: 'acerov', a: 'aceroa', r: 'aceror', l: 'acerol', nameV: 'Acero Verde', nameA: 'Acero Azul', nameR: 'Acero Rojo', nameL: 'Acero Amarillo' }
        },
        accessory: {
            base: { v: 'fragv', a: 'fraga', r: 'fragr', l: 'fragl', nameV: 'Frag Verde', nameA: 'Frag Azul', nameR: 'Frag Rojo', nameL: 'Frag Amarillo' },
            sec: { v: 'piedrav', a: 'piedraa', r: 'piedrar', l: 'piedral', nameV: 'Piedra Verde', nameA: 'Piedra Azul', nameR: 'Piedra Rojo', nameL: 'Piedra Amarillo' },
            steel: { v: 'platinov', a: 'platinoa', r: 'platinor', l: 'platinol', nameV: 'Platino Verde', nameA: 'Platino Azul', nameR: 'Platino Rojo', nameL: 'Platino Amarillo' }
        },
        garra: {
            base: { v: 'pslv', a: 'psla', r: 'pslr', l: 'psll', nameV: 'PSL Verde', nameA: 'PSL Azul', nameR: 'PSL Rojo', nameL: 'PSL Amarillo' },
            sec: { v: 'omv', a: 'oma', r: 'omr', l: 'oml', nameV: 'OM Verde', nameA: 'OM Azul', nameR: 'OM Rojo', nameL: 'OM Amarillo' },
            steel: { v: 'acerov', a: 'aceroa', r: 'aceror', l: 'acerol', nameV: 'Acero Verde', nameA: 'Acero Azul', nameR: 'Acero Rojo', nameL: 'Acero Amarillo' }
        },
        ojo: {
            base: { v: 'fragv', a: 'fraga', r: 'fragr', l: 'fragl', nameV: 'Frag Verde', nameA: 'Frag Azul', nameR: 'Frag Rojo', nameL: 'Frag Amarillo' },
            sec: { v: 'piedrav', a: 'piedraa', r: 'piedrar', l: 'piedral', nameV: 'Piedra Verde', nameA: 'Piedra Azul', nameR: 'Piedra Rojo', nameL: 'Piedra Amarillo' },
            steel: { v: 'platinov', a: 'platinoa', r: 'platinor', l: 'platinol', nameV: 'Platino Verde', nameA: 'Platino Azul', nameR: 'Platino Rojo', nameL: 'Platino Amarillo' }
        }
    };

    const resImg = resultImages[safeType] || resultImages.weapon;

    const rarityKey = 'rarity' + safeRarity.charAt(0).toUpperCase() + safeRarity.slice(1);
    const rarityLabel = t[rarityKey] || safeRarity;

    const resultHTML = `
    <div class="result-with-fondo" style="position: relative; text-align: center;">
        <img src="${fondoImg}" alt="fondo" class="fondo-resultado">
        <div class="result-content-overlay">
            <div class="rarity-label" style="color: ${colors.text};">${rarityLabel}</div>
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
                ${safeRarity === 'legendary' ? `<div class="item-box legendary-item"><img src="images/Fondo legendario.png" alt="fondo" class="fondo-item"><img src="images/${resImg.base.l}.png" alt="item" class="item-img"><span>${nBaseL}</span><label>${resImg.base.nameL}</label></div>` : ''}
            </div>
        </div>

        <div class="result-section" style="border-left: 4px solid ${colors.border};">
            <h4 style="color: ${colors.text};">${t.itemsSecundary}</h4>
            <div class="result-row">
                <div class="item-box"><img src="images/${resImg.sec.v}.png"><span>${nSecV}</span><label>${resImg.sec.nameV}</label></div>
                <div class="item-box"><img src="images/${resImg.sec.a}.png"><span>${nSecA}</span><label>${resImg.sec.nameA}</label></div>
                <div class="item-box"><img src="images/${resImg.sec.r}.png"><span>${nSecR}</span><label>${resImg.sec.nameR}</label></div>
                ${safeRarity === 'legendary' ? `<div class="item-box legendary-item"><img src="images/Fondo legendario.png" alt="fondo" class="fondo-item"><img src="images/${resImg.sec.l}.png" alt="item" class="item-img"><span>${nSecL}</span><label>${resImg.sec.nameL}</label></div>` : ''}
            </div>
        </div>

        <div class="result-section" style="border-left: 4px solid ${colors.border};">
            <h4 style="color: ${colors.text};">${t.steelNeeded}</h4>
            <div class="result-row">
                <div class="item-box"><img src="images/${resImg.steel.v}.png"><span>${nSteelV}</span><label>${resImg.steel.nameV}</label></div>
                <div class="item-box"><img src="images/${resImg.steel.a}.png"><span>${nSteelA}</span><label>${resImg.steel.nameA}</label></div>
                <div class="item-box"><img src="images/${resImg.steel.r}.png"><span>${nSteelR}</span><label>${resImg.steel.nameR}</label></div>
                ${safeRarity === 'legendary' ? `<div class="item-box legendary-item"><img src="images/Fondo legendario.png" alt="fondo" class="fondo-item"><img src="images/${resImg.steel.l}.png" alt="item" class="item-img"><span>${nSteelL}</span><label>${resImg.steel.nameL}</label></div>` : ''}
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

    const specialSection = safeRarity !== 'rare' ? `
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
