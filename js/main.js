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
        sincronizando: "⏳ Sincronizando...",
        cargandoLocal: "⏳ Cargando hora local...",
        leyendaVentana: "En ventana de spawn (±15 min)",
        leyendaProximo: "Siguiente spawn",
        leyendaNoDisponible: "No disponible",
        zonaHoraria: "Horario sincronizado con el servidor:",
        horaBrasil: "Hora de Brasil (UTC-3)",
        columnaJefes: "JEFES SEMANALES",
        columnaHorarios: "Horarios de Aparición (Hora del Servidor)",
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
        rarityRare: "Raro (Azul)",
        rarityEpic: "Épico (Morado)",
        rarityLegendary: "Legendario (Naranja)",
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
        "Deidad Demoníaca de Hielo MAJ": "Deidad Demoníaca de Hielo MAJ"
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
        sincronizando: "⏳ Sincronizando...",
        cargandoLocal: "⏳ Carregando hora local...",
        leyendaVentana: "Na janela de spawn (±15 min)",
        leyendaProximo: "Próximo spawn",
        leyendaNoDisponible: "Não disponível",
        zonaHoraria: "Horário sincronizado com o servidor:",
        horaBrasil: "Hora do Brasil (UTC-3)",
        columnaJefes: "CHEFES SEMANAIS",
        columnaHorarios: "Horários de Aparição (Hora do Servidor)",
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
        rarityRare: "Raro (Azul)",
        rarityEpic: "Épico (Roxo)",
        rarityLegendary: "Lendário (Laranja)",
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
        "Deidad Demoníaca de Hielo MAJ": "Divindade Demônica de Gelo MAJ"
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
        sincronizando: "⏳ Synchronizing...",
        cargandoLocal: "⏳ Loading local time...",
        leyendaVentana: "In spawn window (±15 min)",
        leyendaProximo: "Next spawn",
        leyendaNoDisponible: "Not available",
        zonaHoraria: "Time synchronized with server:",
        horaBrasil: "Brazil Time (UTC-3)",
        columnaJefes: "WEEKLY BOSSES",
        columnaHorarios: "Spawn Times (Server Time)",
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
        rarityRare: "Rare (Blue)",
        rarityEpic: "Epic (Purple)",
        rarityLegendary: "Legendary (Orange)",
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
        "Deidad Demoníaca de Hielo MAJ": "Ice Demon Deity MAJ"
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

    const relojServidor = document.getElementById('reloj-servidor');
    if (relojServidor.querySelector('span')) {
        relojServidor.querySelector('span').textContent = t.sincronizando;
    }
    const relojLocal = document.getElementById('reloj-local');
    if (relojLocal.querySelector('span')) {
        relojLocal.querySelector('span').textContent = t.cargandoLocal;
    }

    document.querySelector('.info-zona-horaria').innerHTML = t.zonaHoraria + ' <strong>' + t.horaBrasil + '</strong>';

    document.querySelector('#horarios table thead tr th:first-child').textContent = t.columnaJefes;
    document.querySelector('#horarios table thead tr th:last-child').textContent = t.columnaHorarios;

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
const relojElemento = document.getElementById('reloj-servidor');
const relojLocalElemento = document.getElementById('reloj-local');
const horasSpawnCache = Array.from(document.querySelectorAll('td .hora-spawn'));

const zonaHorariaServidor = 'America/Sao_Paulo';
const margenAntesMinutos = 15;
const margenDespuesMinutos = 5;

function actualizarReloj() {
    try {
        const ahora = new Date();
        const opciones = {
            timeZone: zonaHorariaServidor,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        const horaServidor = ahora.toLocaleTimeString('es-ES', opciones);
        relojElemento.textContent = horaServidor;
    } catch (error) {
        console.error('Error al actualizar reloj del servidor:', error);
        relojElemento.textContent = 'Error al cargar hora';
    }
}

function actualizarRelojLocal() {
    try {
        const ahora = new Date();
        const horaLocal = ahora.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        relojLocalElemento.textContent = `${horaLocal} (hora local)`;
    } catch (error) {
        console.error('Error al actualizar reloj local:', error);
        relojLocalElemento.textContent = 'Error al cargar hora local';
    }
}

function resaltarProximaHora() {
    try {
        const ahora = new Date();
        const opciones = {
            timeZone: zonaHorariaServidor,
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };
        const horaServidor = ahora.toLocaleTimeString('es-ES', opciones);
        const [horas, minutos] = horaServidor.split(':').map(Number);
        const horaActualMinutos = horas * 60 + minutos;

        let proximaHoraMinutos = null;
        let spawnsDelDia = [];

        horasSpawnCache.forEach(span => {
            const horaTexto = span.getAttribute('data-hora');
            const [h, m] = horaTexto.split(':').map(Number);
            spawnsDelDia.push(h * 60 + m);
        });

        const spawnsUnicosOrdenados = [...new Set(spawnsDelDia)].sort((a, b) => a - b);

        for (const spawnMinutos of spawnsUnicosOrdenados) {
            if (spawnMinutos > horaActualMinutos) {
                proximaHoraMinutos = spawnMinutos;
                break;
            }
        }

        if (proximaHoraMinutos === null && spawnsUnicosOrdenados.length > 0) {
            proximaHoraMinutos = spawnsUnicosOrdenados[0];
        }

        horasSpawnCache.forEach(span => {
            span.classList.remove('ventana-spawn', 'proximo-spawn');

            const horaTexto = span.getAttribute('data-hora');
            const [h, m] = horaTexto.split(':').map(Number);
            const horaSpawnMinutos = h * 60 + m;

            let enVentanaDeSpawn = false;

            if (horaSpawnMinutos === 0) {
                enVentanaDeSpawn = (horaActualMinutos >= 1425 || horaActualMinutos <= margenDespuesMinutos);
            }
            else if (horaActualMinutos >= (horaSpawnMinutos - margenAntesMinutos) &&
                     horaActualMinutos <= (horaSpawnMinutos + margenDespuesMinutos)) {
                enVentanaDeSpawn = true;
            }

            if (enVentanaDeSpawn) {
                span.classList.add('ventana-spawn');
            }
            else if (proximaHoraMinutos !== null && horaSpawnMinutos === proximaHoraMinutos) {
                span.classList.add('proximo-spawn');
            }
        });
    } catch (error) {
        console.error('Error al resaltar próxima hora:', error);
    }
}

function actualizarTodo() {
    actualizarReloj();
    actualizarRelojLocal();
    resaltarProximaHora();
}

actualizarTodo();
setInterval(actualizarReloj, 1000);
setInterval(actualizarRelojLocal, 1000);
setInterval(resaltarProximaHora, 5000);

document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        actualizarTodo();
    }
});

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