// ====== CALCULADORA DE FABRICACIÓN MEJORADA ======
// Versión con sistema de Rare, Epic y Legendary

// Traducciones para la calculadora
const craftTranslations = {
    es: {
        title: "Calculadora de Forjado",
        selectType: "Seleccionar Categoría",
        selectRarity: "Rareza Objetivo",
        rarityRare: "Raro (Azul)",
        rarityEpic: "Épico (Morado)",
        rarityLegendary: "Legendario (Naranja)",
        typeWeapon: "Armas",
        typeArmor: "Armadura",
        typeAccessory: "Accesorios",
        typeGarra: "Garra",
        typeOjo: "Ojo",
        inventory: "Tu Inventario",
        resources: "Recursos",
        calculate: "Calcular",
        result: "Resultado",
        need: "Necesitas",
        have: "Tienes",
        missing: "Faltan",
        noNeed: "No necesitas",
        // Materiales
        matPslV: "PSL Verde",
        matPslA: "PSL Azul",
        matPslR: "PSL Rojo",
        matOmV: "OM Verde",
        matOmA: "OM Azul",
        matOmR: "OM Rojo",
        matAceroV: "Acero Verde",
        matAceroA: "Acero Azul",
        matAceroR: "Acero Rojo",
        matPlatinoV: "Platino Verde",
        matPlatinoA: "Platino Azul",
        matPlatinoR: "Platino Rojo",
        matPolvo: "Polvo Mágico",
        matCobre: "Cobre",
        matMonedas: "Monedas (x10k)",
        matDs: "Dragon's Soul",
        matPolvoB: "Polvo Brillante",
        matHierro: "Hierro Oscuro",
        matDragonS: "Dragon Steel",
        matElixir: "Elixir de Vida",
        matCrystal: "Cristal de Hielo"
    },
    pt: {
        title: "Calculadora de Forja",
        selectType: "Selecionar Categoria",
        selectRarity: "Raridade Alvo",
        rarityRare: "Raro (Azul)",
        rarityEpic: "Épico (Roxo)",
        rarityLegendary: "Lendário (Laranja)",
        typeWeapon: "Armas",
        typeArmor: "Armadura",
        typeAccessory: "Acessórios",
        typeGarra: "Garra",
        typeOjo: "Olho",
        inventory: "Seu Inventário",
        resources: "Recursos",
        calculate: "Calcular",
        result: "Resultado",
        need: "Precisa",
        have: "Tem",
        missing: "Faltam",
        noNeed: "Não precisa",
        matPslV: "PSL Verde",
        matPslA: "PSL Azul",
        matPslR: "PSL Vermelho",
        matOmV: "OM Verde",
        matOmA: "OM Azul",
        matOmR: "OM Vermelho",
        matAceroV: "Aço Verde",
        matAceroA: "Aço Azul",
        matAceroR: "Aço Vermelho",
        matPlatinoV: "Platina Verde",
        matPlatinoA: "Platina Azul",
        matPlatinoR: "Platina Vermelho",
        matPolvo: "Pó Mágico",
        matCobre: "Cobre",
        matMonedas: "Moedas (x10k)",
        matDs: "Dragon's Soul",
        matPolvoB: "Pó Brilhante",
        matHierro: "Ferro Negro",
        matDragonS: "Dragon Steel",
        matElixir: "Elixir de Vida",
        matCrystal: "Cristal de Gelo"
    },
    en: {
        title: "Forging Calculator",
        selectType: "Select Category",
        selectRarity: "Target Rarity",
        rarityRare: "Rare (Blue)",
        rarityEpic: "Epic (Purple)",
        rarityLegendary: "Legendary (Orange)",
        typeWeapon: "Weapons",
        typeArmor: "Armor",
        typeAccessory: "Accessories",
        typeGarra: "Claw",
        typeOjo: "Eye",
        inventory: "Your Inventory",
        resources: "Resources",
        calculate: "Calculate",
        result: "Result",
        need: "Need",
        have: "Have",
        missing: "Missing",
        noNeed: "Not needed",
        matPslV: "PSL Green",
        matPslA: "PSL Blue",
        matPslR: "PSL Red",
        matOmV: "OM Green",
        matOmA: "OM Blue",
        matOmR: "OM Red",
        matAceroV: "Steel Green",
        matAceroA: "Steel Blue",
        matAceroR: "Steel Red",
        matPlatinoV: "Platinum Green",
        matPlatinoA: "Platinum Blue",
        matPlatinoR: "Platinum Red",
        matPolvo: "Magic Powder",
        matCobre: "Copper",
        matMonedas: "Coins (x10k)",
        matDs: "Dragon's Soul",
        matPolvoB: "Glittering Powder",
        matHierro: "Dark Steel",
        matDragonS: "Dragon Steel",
        matElixir: "Life Elixir",
        matCrystal: "Ice Crystal"
    }
};

// Configuración de recetas por tipo y rareza
// Formato: [verde, azul, rojo, acero, recursos fijos, polvo, cobre, ds]
const recipes = {
    // ARMAS (PSL + OM + Acero)
    weapon: {
        rare: {
            name: "PSL + OM",
            base: { v: 10, a: 10, r: 10 },
            acero: { v: 3, a: 3, r: 3 },
            polvo: 125,
            cobre: 4000,
            ds: 1000
        },
        epic: {
            name: "PSL + OM",
            base: { v: 100, a: 100, r: 100 },
            acero: { v: 30, a: 30, r: 30 },
            polvo: 1250,
            polvoB: 25,
            hierro: 5000,
            cobre: 20000,
            ds: 10000
        },
        legendary: {
            name: "PSL + OM",
            base: { v: 1000, a: 1000, r: 1000 },
            acero: { v: 300, a: 300, r: 300 },
            polvo: 12500,
            polvoB: 125,
            hierro: 25000,
            dragonS: 5000,
            cobre: 100000,
            ds: 50000
        }
    },
    // ARMADURA (Quintessence + Baratija + Acero)
    armor: {
        rare: {
            name: "Quintessence + Baratija",
            base: { v: 10, a: 10, r: 10 },
            acero: { v: 3, a: 3, r: 3 },
            polvo: 125,
            cobre: 4000,
            ds: 1000
        },
        epic: {
            name: "Quintessence + Baratija",
            base: { v: 100, a: 100, r: 100 },
            acero: { v: 30, a: 30, r: 30 },
            polvo: 1250,
            polvoB: 25,
            hierro: 5000,
            cobre: 20000,
            ds: 10000
        },
        legendary: {
            name: "Quintessence + Baratija",
            base: { v: 1000, a: 1000, r: 1000 },
            acero: { v: 300, a: 300, r: 300 },
            polvo: 12500,
            polvoB: 125,
            hierro: 25000,
            dragonS: 5000,
            cobre: 100000,
            ds: 50000
        }
    },
    // ACCESORIOS (Frag + Piedra + Platino)
    accessory: {
        rare: {
            name: "Frag + Piedra",
            base: { v: 10, a: 10, r: 10 },
            acero: { v: 3, a: 3, r: 3 },
            polvo: 125,
            cobre: 4000,
            ds: 1000
        },
        epic: {
            name: "Frag + Piedra",
            base: { v: 100, a: 100, r: 100 },
            acero: { v: 30, a: 30, r: 30 },
            polvo: 1250,
            polvoB: 25,
            hierro: 5000,
            cobre: 20000,
            ds: 10000
        },
        legendary: {
            name: "Frag + Piedra",
            base: { v: 1000, a: 1000, r: 1000 },
            acero: { v: 300, a: 300, r: 30 },
            polvo: 12500,
            polvoB: 125,
            hierro: 25000,
            dragonS: 5000,
            cobre: 100000,
            ds: 50000
        }
    }
};

// Estado actual
let currentType = 'weapon';
let currentRarity = 'rare';

function formatNumber(num) {
    return num.toLocaleString('es-ES');
}

function getImagePath(baseName) {
    return `images/${baseName}.png`;
}

function setActiveButton(btn) {
    document.querySelectorAll('.tipo-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function setActiveRarity(btn) {
    document.querySelectorAll('.rare-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

// Cambio de tipo de equipo
document.getElementById('armaswitch').addEventListener('click', function() {
    currentType = 'weapon';
    setActiveButton(this);
    calcular();
});

document.getElementById('ropaswitch').addEventListener('click', function() {
    currentType = 'armor';
    setActiveButton(this);
    calcular();
});

document.getElementById('hornswitch').addEventListener('click', function() {
    currentType = 'accessory';
    setActiveButton(this);
    calcular();
});

document.getElementById('garraR').addEventListener('click', function() {
    currentType = 'weapon';
    setActiveButton(this);
    calcular();
});

document.getElementById('ojitoR').addEventListener('click', function() {
    currentType = 'accessory';
    setActiveButton(this);
    calcular();
});

// Cambio de rareza
document.querySelectorAll('.rare-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        currentRarity = this.dataset.rarity;
        setActiveRarity(this);
        calcular();
    });
});

// Función principal de cálculo
function calcular() {
    const lang = localStorage.getItem('language') || 'es';
    const t = craftTranslations[lang];

    // Obtener valores del inventario
    const pslV = parseInt(document.getElementById('psli')?.value) || 0;
    const pslA = parseInt(document.getElementById('rpsli')?.value) || 0;
    const pslR = parseInt(document.getElementById('hpsli')?.value) || 0;

    const omV = parseInt(document.getElementById('ci')?.value) || 0;
    const omA = parseInt(document.getElementById('rci')?.value) || 0;
    const omR = parseInt(document.getElementById('hci')?.value) || 0;

    const aceroV = parseInt(document.getElementById('ai')?.value) || 0;
    const aceroA = parseInt(document.getElementById('rai')?.value) || 0;
    const aceroR = parseInt(document.getElementById('hai')?.value) || 0;

    const platinoV = parseInt(document.getElementById('platv')?.value) || 0;
    const platinoA = parseInt(document.getElementById('plata')?.value) || 0;
    const platinoR = parseInt(document.getElementById('platr')?.value) || 0;

    const polvo = parseInt(document.getElementById('polvoi')?.value) || 0;
    const cobre = parseInt(document.getElementById('cobrei')?.value) || 0;
    const monedas = (parseInt(document.getElementById('mplata')?.value) || 0) * 10000;
    const ds = parseInt(document.getElementById('dsi')?.value) || 0;

    const polvoB = parseInt(document.getElementById('polvob')?.value) || 0;
    const hierro = parseInt(document.getElementById('hierroo')?.value) || 0;
    const dragonS = parseInt(document.getElementById('dragons')?.value) || 0;

    // Obtener receta según tipo y rareza
    const recipe = recipes[currentType][currentRarity];

    // Calcular faltantes
    let resultHTML = `<div class="result-header"><span class="rarity-${currentRarity}">${t['rarity' + currentRarity.charAt(0).toUpperCase() + currentRarity.slice(1)]}</span></div>`;

    resultHTML += '<div class="result-section">';
    resultHTML += `<h4>${t.typeWeapon} / ${recipe.name}</h4>`;

    // Items base (PSL o Quintessence + OM o Frag + Piedra)
    const baseV = Math.max(0, recipe.base.v - pslV);
    const baseA = Math.max(0, recipe.base.a - pslA);
    const baseR = Math.max(0, recipe.base.r - pslR);

    resultHTML += '<div class="result-row">';
    resultHTML += `<img src="${getImagePath('pslv')}" alt="PSL V"><span>${baseV > 0 ? baseV : '0'}</span>`;
    resultHTML += `<img src="${getImagePath('psla')}" alt="PSL A"><span>${baseA > 0 ? baseA : '0'}</span>`;
    resultHTML += `<img src="${getImagePath('pslr')}" alt="PSL R"><span>${baseR > 0 ? baseR : '0'}</span>`;
    resultHTML += '</div>';

    // Items secundarios (OM o Frag o Baratija)
    const secV = Math.max(0, recipe.base.v - omV);
    const secA = Math.max(0, recipe.base.a - omA);
    const secR = Math.max(0, recipe.base.r - omR);

    resultHTML += '<div class="result-row">';
    resultHTML += `<img src="${getImagePath('omv')}" alt="OM V"><span>${secV > 0 ? secV : '0'}</span>`;
    resultHTML += `<img src="${getImagePath('oma')}" alt="OM A"><span>${secA > 0 ? secA : '0'}</span>`;
    resultHTML += `<img src="${getImagePath('omr')}" alt="OM R"><span>${secR > 0 ? secR : '0'}</span>`;
    resultHTML += '</div>';
    resultHTML += '</div>';

    // Acero
    resultHTML += '<div class="result-section">';
    resultHTML += '<h4>Acero / Platino</h4>';
    const aceroNeededV = Math.max(0, recipe.acero.v - aceroV);
    const aceroNeededA = Math.max(0, recipe.acero.a - aceroA);
    const aceroNeededR = Math.max(0, recipe.acero.r - aceroR);

    resultHTML += '<div class="result-row">';
    resultHTML += `<img src="${getImagePath('acerov')}" alt="Acero V"><span>${aceroNeededV > 0 ? aceroNeededV : '0'}</span>`;
    resultHTML += `<img src="${getImagePath('aceroa')}" alt="Acero A"><span>${aceroNeededA > 0 ? aceroNeededA : '0'}</span>`;
    resultHTML += `<img src="${getImagePath('aceror')}" alt="Acero R"><span>${aceroNeededR > 0 ? aceroNeededR : '0'}</span>`;
    resultHTML += '</div>';
    resultHTML += '</div>';

    // Recursos básicos
    resultHTML += '<div class="result-section">';
    resultHTML += `<h4>${t.resources}</h4>`;
    resultHTML += '<div class="result-row">';

    const polvoNeeded = Math.max(0, recipe.polvo - polvo);
    const cobreNeeded = Math.max(0, recipe.cobre - cobre - monedas);
    const dsNeeded = Math.max(0, recipe.ds - ds);

    resultHTML += `<div class="resource-item"><img src="${getImagePath('polv')}" alt="Polvo"><span>${polvoNeeded > 0 ? formatNumber(polvNeeded) : '0'}</span></div>`;
    resultHTML += `<div class="resource-item"><img src="${getImagePath('cobreimg')}" alt="Cobre"><span>${cobreNeeded > 0 ? formatNumber(cobreNeeded) : '0'}</span></div>`;
    resultHTML += `<div class="resource-item"><img src="${getImagePath('imgds')}" alt="DS"><span>${dsNeeded > 0 ? formatNumber(dsNeeded) : '0'}</span></div>`;
    resultHTML += '</div>';

    // Recursos Epic/Legendary
    if (currentRarity !== 'rare') {
        resultHTML += '<div class="result-row epic-resources">';

        const polvoBNeeded = Math.max(0, recipe.polvoB - polvoB);
        const hierroNeeded = Math.max(0, recipe.hierro - hierro);

        resultHTML += `<div class="resource-item epic"><img src="${getImagePath('polv')}" alt="Polvo Brillante"><span class="label">PB</span><span>${polvoBNeeded > 0 ? formatNumber(polvBNeeded) : '0'}</span></div>`;
        resultHTML += `<div class="resource-item epic"><img src="${getImagePath('polv')}" alt="Hierro Oscuro"><span class="label">HO</span><span>${hierroNeeded > 0 ? formatNumber(hierroNeeded) : '0'}</span></div>`;

        if (recipe.dragonS) {
            const dragonSNeeded = Math.max(0, recipe.dragonS - dragonS);
            resultHTML += `<div class="resource-item epic"><img src="${getImagePath('polv')}" alt="Dragon Steel"><span class="label">DS</span><span>${dragonSNeeded > 0 ? formatNumber(dragonSNeeded) : '0'}</span></div>`;
        }
        resultHTML += '</div>';
    }
    resultHTML += '</div>';

    // Actualizar resultado
    const resultDiv = document.getElementById('resultado');
    if (resultDiv) {
        resultDiv.innerHTML = resultHTML;
    }

    // Resultado simplificado para legacy
    document.getElementById('resultado').innerHTML = resultHTML;
}

// Auto-calcular cuando cambian los inputs
document.querySelectorAll('.inv-item input').forEach(input => {
    input.addEventListener('input', calcular);
});

// Calcular al cargar
calcular();
