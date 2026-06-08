// ====== TRADUCCIONES ======
const translations = {
    es: {
        titulo: "Guía MIR4 - Servidor SA31",
        navPrincipal: "Contenido Principal",
        navProximamente: "Próximamente",
        navHorarios: "Horario de Jefes",
        navExpediciones: "Expedición de Clan",
        navFabricacion: "Calculadora de Fabricación",
        navGuias: "Guías",
        navEventos: "Eventos",
        horariosTitulo: "Horario de Jefes",
        horariosSubtitulo: "Consulta los horarios de aparición sincronizados con el servidor SA31",
        expedicionesTitulo: "Expedición de Clan",
        expedicionesSubtitulo: "Calcula los recursos necesarios y estatuas obtenidas",
        columnaSeleccionar: "Seleccionar",
        columnaExpedicion: "Expedición de Clan",
        columnaCobre: "Cobre",
        columnaAcero: "Acero",
        columnaEnergia: "Energía",
        columnaEstatuas: "Estatuas",
        columnaOro: "Oro (Resummon)",
        totalRecursos: "Total de Recursos Seleccionados",
        cobreTotal: "Cobre Total",
        aceroTotal: "Acero Total",
        energiaTotal: "Energía Total",
        estatuasTotal: "Estatuas Totales",
        oroTotal: "Oro Total (Resummon)",
        fabricacionTitulo: "Calculadora de Forjado",
        fabricacionSubtitulo: "Calcula los materiales para fabricar equipos épicos y legendarios",
        fabricacionSelectType: "Seleccionar",
        fabricacionTuInventario: "Tu Inventario",
        fabricacionRecursos: "Recursos",
        fabricacionBtnCalcular: "Calcular",
        fabricacionResultadoItems: "Materiales Necesarios",
        fabricacionResultadoAcero: "Acero Necesario",
        fabricacionResultadoMateriales: "Materiales Necesarios",
        fabricacionResultadoRecursos: "Recursos Totales",
        rarityRare: "Raro",
        rarityEpic: "Epico",
        rarityLegendary: "Legendario",
        "Espíritu Zorro": "Espíritu Zorro",
        "Tormenta Demoníaca": "Tormenta Demoníaca",
        "Demonio de Roca Infernal": "Demonio de Roca Infernal",
        "Diablo de Luna Roja": "Diablo de Luna Roja",
        "Abominación Infernal": "Abominación Infernal",
        "Dragón de Trueno Azul": "Dragón de Trueno Azul",
        "Emperador de Llama Azure": "Emperador de Llama Azure",
        "Escorpión Serpentino Sanguinario": "Escorpión Serpentino Sanguinario",
        "Bestia Demoníaca Absorbedora de Almas": "Bestia Demoníaca Absorbedora de Almas",
        "Chakravarti Darkmaur": "Chakravarti Darkmaur",
        "Deidad Demoníaca de Hielo MAJ": "Deidad Demoníaca de Hielo MAJ",
        proxSpawns: "⏰ Próximos Spawns (≤ 30 min)",
        todosLosJefes: "📋 Todos los Jefes",
        placeholderBuscar: "Buscar por jefe, ubicación o mundo...",
        todosLosMundos: "Todos los Mundos",
        colMundo: "Mundo",
        colCapa: "Capa",
        colUbicacion: "Ubicación",
        colJefe: "Jefe",
        colHorario: "Horario",
        colRespawn: "Respawn",
        colAcciones: "Acciones",
        copiar: "Copiar",
        copiarTodos: "Copiar Todos",
        sinJefes30min: "Ningún jefe con spawn en los próximos 30 minutos.",
        sinJefes31a60: "Ningún jefe con spawn entre 31 y 60 minutos.",
        infoCopiada: "Información copiada",
        errorCopiar: "Error al copiar. Intente de nuevo.",
        horaServidor: "Hora del Servidor",
        horaLocal: "Hora Local",
        proxSpawnsHora: "Próximos Spawns (31-60 min)"
    },
    pt: {
        titulo: "Guia MIR4 - Servidor SA31",
        navPrincipal: "Conteúdo Principal",
        navProximamente: "Em Breve",
        navHorarios: "Horário de Jefes",
        navExpediciones: "Expedição de Clan",
        navFabricacion: "Calculadora de Fabricação",
        navGuias: "Guias",
        navEventos: "Eventos",
        horariosTitulo: "Horário de Jefes",
        horariosSubtitulo: "Consulte os horários de aparição sincronizados com o servidor SA31",
        expedicionesTitulo: "Expedição de Clan",
        expedicionesSubtitulo: "Calcule os recursos necessários e estátuas obtidas",
        columnaSeleccionar: "Selecionar",
        columnaExpedicion: "Expedição de Clan",
        columnaCobre: "Cobre",
        columnaAcero: "Aço",
        columnaEnergia: "Energia",
        columnaEstatuas: "Estátuas",
        columnaOro: "Ouro (Resummon)",
        totalRecursos: "Total de Recursos Selecionados",
        cobreTotal: "Cobre Total",
        aceroTotal: "Aço Total",
        energiaTotal: "Energia Total",
        estatuasTotal: "Estátuas Totais",
        oroTotal: "Ouro Total (Resummon)",
        fabricacionTitulo: "Calculadora de Forja",
        fabricacionSubtitulo: "Calcule os materiais para fabricar equipamentos épicos e lendários",
        fabricacionSelectType: "Selecionar",
        fabricacionTuInventario: "Seu Inventário",
        fabricacionRecursos: "Recursos",
        fabricacionBtnCalcular: "Calcular",
        fabricacionResultadoItems: "Materiais Necessários",
        fabricacionResultadoAcero: "Aço Necessário",
        fabricacionResultadoMateriales: "Materiais Necessários",
        fabricacionResultadoRecursos: "Recursos Totais",
        rarityRare: "Raro",
        rarityEpic: "Epico",
        rarityLegendary: "Legendario",
        "Espíritu Zorro": "Espírito Raposa",
        "Tormenta Demoníaca": "Touro Demônio",
        "Demonio de Roca Infernal": "Demônio Infernal de Pedra",
        "Diablo de Luna Roja": "Diabo Lua Vermelha",
        "Abominación Infernal": "Abominação Infernal",
        "Dragón de Trueno Azul": "Dragão de Trovão Azul",
        "Emperador de Llama Azure": "Imperador Chama Azure",
        "Escorpión Serpentino Sanguinario": "Escorpião Serpente Sanguinário",
        "Bestia Demoníaca Absorbedora de Almas": "Besta Demoníaca Absorbedora de Almas",
        "Chakravarti Darkmaur": "Chakravarti Darkmaur",
        "Deidad Demoníaca de Hielo MAJ": "Divindade Demônica de Gelo MAJ",
        proxSpawns: "⏰ Próximos Spawns (≤ 30 min)",
        todosLosJefes: "📋 Todos os Chefes",
        placeholderBuscar: "Buscar por chefe, localização ou mundo...",
        todosLosMundos: "Todos os Mundos",
        colMundo: "Mundo",
        colCapa: "Camada",
        colUbicacion: "Localização",
        colJefe: "Chefe",
        colHorario: "Horário",
        colRespawn: "Respawn",
        colAcciones: "Ações",
        copiar: "Copiar",
        copiarTodos: "Copiar Todos",
        sinJefes30min: "Nenhum chefe com spawn nos próximos 30 minutos.",
        sinJefes31a60: "Nenhum chefe com spawn entre 31 e 60 minutos.",
        infoCopiada: "Informação copiada",
        errorCopiar: "Erro ao copiar. Tente novamente.",
        horaServidor: "Hora do Servidor",
        horaLocal: "Hora Local",
        proxSpawnsHora: "Próximos Spawns (31-60 min)"
    },
    en: {
        titulo: "MIR4 Guide - Server SA31",
        navPrincipal: "Main Content",
        navProximamente: "Coming Soon",
        navHorarios: "Boss Schedule",
        navExpediciones: "Clan Expedition",
        navFabricacion: "Crafting Calculator",
        navGuias: "Guides",
        navEventos: "Events",
        horariosTitulo: "Boss Schedule",
        horariosSubtitulo: "Check spawn times synchronized with SA31 server",
        expedicionesTitulo: "Clan Expedition",
        expedicionesSubtitulo: "Calculate required resources and statues obtained",
        columnaSeleccionar: "Select",
        columnaExpedicion: "Clan Expedition",
        columnaCobre: "Copper",
        columnaAcero: "Steel",
        columnaEnergia: "Energy",
        columnaEstatuas: "Statues",
        columnaOro: "Gold (Resummon)",
        totalRecursos: "Total Selected Resources",
        cobreTotal: "Total Copper",
        aceroTotal: "Total Steel",
        energiaTotal: "Total Energy",
        estatuasTotal: "Total Statues",
        oroTotal: "Total Gold (Resummon)",
        fabricacionTitulo: "Forging Calculator",
        fabricacionSubtitulo: "Calculate materials for epic and legendary equipment",
        fabricacionSelectType: "Select",
        fabricacionTuInventario: "Your Inventory",
        fabricacionRecursos: "Resources",
        fabricacionBtnCalcular: "Calculate",
        fabricacionResultadoItems: "Needed Materials",
        fabricacionResultadoAcero: "Steel Needed",
        fabricacionResultadoMateriales: "Materials Needed",
        fabricacionResultadoRecursos: "Total Resources",
        rarityRare: "Rare",
        rarityEpic: "Epic",
        rarityLegendary: "Legendary",
        "Espíritu Zorro": "Fox Spirit Beast",
        "Tormenta Demoníaca": "Demon Bull God",
        "Demonio de Roca Infernal": "Hell Rock Fiend",
        "Diablo de Luna Roja": "Redmoon Devil",
        "Abominación Infernal": "Infernal Abomination",
        "Dragón de Trueno Azul": "Blue Thunder Dragon",
        "Emperador de Llama Azure": "Azure Flame Emperor",
        "Escorpión Serpentino Sanguinario": "Sanguinary Serpent Scorpion",
        "Bestia Demoníaca Absorbedora de Almas": "Soul-absorbing Demon Beast",
        "Chakravarti Darkmaur": "Chakravarti Darkmaur",
        "Deidad Demoníaca de Hielo MAJ": "Ice Demon Deity MAJ",
        proxSpawns: "⏰ Upcoming Spawns (≤ 30 min)",
        todosLosJefes: "📋 All Bosses",
        placeholderBuscar: "Search by boss, location or world...",
        todosLosMundos: "All Worlds",
        colMundo: "World",
        colCapa: "Layer",
        colUbicacion: "Location",
        colJefe: "Boss",
        colHorario: "Schedule",
        colRespawn: "Respawn",
        colAcciones: "Actions",
        copiar: "Copy",
        copiarTodos: "Copy All",
        sinJefes30min: "No boss spawning in the next 30 minutes.",
        sinJefes31a60: "No boss spawning between 31 and 60 minutes.",
        infoCopiada: "Information copied",
        errorCopiar: "Copy error. Please try again.",
        horaServidor: "Server Time",
        horaLocal: "Local Time",
        proxSpawnsHora: "Upcoming Spawns (31-60 min)"
    }
};

// ====== IDIOMA ======
let currentLang = localStorage.getItem('mir4-lang') || 'es';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('mir4-lang', lang);
    document.documentElement.lang = lang;

    const t = translations[lang];
    if (!t) return;

    document.title = t.titulo;

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        if (t[key]) {
            el.setAttribute('placeholder', t[key]);
        }
    });

    const headerTitle = lang === 'en' ? 'Guide' : lang === 'pt' ? 'Guia' : 'Guía';
    document.querySelector('.sidebar-header h1').innerHTML = '🐉 MIR4 ' + headerTitle;

    document.querySelector('#expediciones .section-title').innerHTML = '🏛️ ' + t.expedicionesTitulo;
    document.querySelector('#expediciones .section-subtitle').textContent = t.expedicionesSubtitulo;

    const expHeaders = document.querySelectorAll('.expedicion-table thead th');
    expHeaders[1].textContent = t.columnaExpedicion;
    expHeaders[2].innerHTML = '<span class="icono-recurso">🪙</span>' + t.columnaCobre;
    expHeaders[3].innerHTML = '<span class="icono-recurso">⚔️</span>' + t.columnaAcero;
    expHeaders[4].innerHTML = '<span class="icono-recurso">⚡</span>' + t.columnaEnergia;
    expHeaders[5].innerHTML = '<span class="icono-recurso">🗿</span>' + t.columnaEstatuas;
    expHeaders[6].innerHTML = '<span class="icono-recurso">💰</span>' + t.columnaOro;

    document.querySelector('.totales-title').innerHTML = '📊 ' + t.totalRecursos;

    const bossRows = document.querySelectorAll('.expedicion-table tbody tr td:nth-child(2)');
    bossRows.forEach(cell => {
        const originalName = cell.textContent.trim();
        if (t[originalName]) {
            cell.textContent = t[originalName];
        }
    });

    // Re-renderizar tabla/cards de bosses para actualizar textos traducidos
    if (typeof renderCards === 'function') renderCards();
    if (typeof renderCardsNextHour === 'function') renderCardsNextHour();
    if (typeof renderTable === 'function') renderTable();

    document.getElementById('language-select').value = lang;
}

document.getElementById('language-select').value = currentLang;
setLanguage(currentLang);

document.getElementById('language-select').addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

// ====== NAVEGACIÓN ENTRE SECCIONES ======
const navItems = document.querySelectorAll('.nav-item:not([style*="cursor: not-allowed"])');
const contentSections = document.querySelectorAll('.content-section');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetSection = item.getAttribute('data-section');

        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        contentSections.forEach(section => section.classList.remove('active'));
        document.getElementById(targetSection).classList.add('active');
    });
});

// ====== RELOJES Y HORARIOS ======
// La lógica de reloj, resaltado y filtros de jefes ahora vive en js/bosses.js
// Esta sección se mantiene solo para compatibilidad (no debe ejecutar nada).

// ====== EXPEDITION CHECKBOXES ======
const checkboxes = document.querySelectorAll('.expedicion-checkbox');
const totalCobreEl = document.getElementById('total-cobre');
const totalAceroEl = document.getElementById('total-acero');
const totalEnergiaEl = document.getElementById('total-energia');
const totalEstatuasEl = document.getElementById('total-estatuas');
const totalOroEl = document.getElementById('total-oro');

function formatearNumero(numero) {
    return numero.toLocaleString('es-ES');
}

function calcularTotales() {
    let totalCobre = 0;
    let totalAcero = 0;
    let totalEnergia = 0;
    let totalEstatuas = 0;
    let totalOro = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.closest('tr').classList.add('selected');

            totalCobre += parseInt(checkbox.getAttribute('data-cobre')) || 0;
            totalAcero += parseInt(checkbox.getAttribute('data-acero')) || 0;
            totalEnergia += parseInt(checkbox.getAttribute('data-energia')) || 0;
            totalEstatuas += parseInt(checkbox.getAttribute('data-estatuas')) || 0;
            totalOro += parseInt(checkbox.getAttribute('data-oro')) || 0;
        } else {
            checkbox.closest('tr').classList.remove('selected');
        }
    });

    actualizarValorConAnimacion(totalCobreEl, totalCobre);
    actualizarValorConAnimacion(totalAceroEl, totalAcero);
    actualizarValorConAnimacion(totalEnergiaEl, totalEnergia);
    actualizarValorConAnimacion(totalEstatuasEl, totalEstatuas);
    actualizarValorConAnimacion(totalOroEl, totalOro);
}

function actualizarValorConAnimacion(elemento, nuevoValor) {
    elemento.style.transform = 'scale(1.2)';
    elemento.style.transition = 'transform 0.2s ease';

    setTimeout(() => {
        elemento.textContent = formatearNumero(nuevoValor);
        elemento.style.transform = 'scale(1)';
    }, 100);
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', calcularTotales);
});

calcularTotales();