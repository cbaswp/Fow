// ====== CALCULADORA DE FABRICACIÓN ======
var imgitem1 = "<div class='resultado-content'><img src='images/pslv.png'> ";
var imgitem2 = "<img src='images/psla.png'> ";
var imgitem3 = "<img src='images/pslr.png'> ";
var imgacero1 = "<img src='images/acerov.png'> ";
var imgacero2 = "<img src='images/aceroa.png'> ";
var imgacero3 = "<img src='images/aceror.png'> ";
var imgitem4 = "<img src='images/omv.png'> ";
var imgitem5 = "<img src='images/oma.png'> ";
var imgitem6 = "<img src='images/omr.png'> ";

var dsarm = 100000;
var cobrearm = 800000;

var uds = document.getElementById('dsi');
var pol = document.getElementById('polvoi');
var cbr = document.getElementById('cobrei');
var mpl = document.getElementById('mplata');

var psl = document.getElementById('psli');
var c = document.getElementById('ci');
var a = document.getElementById('ai');

var rpsl = document.getElementById('rpsli');
var rc = document.getElementById('rci');
var ra = document.getElementById('rai');

var hpsl = document.getElementById('hpsli');
var hc = document.getElementById('hci');
var ha = document.getElementById('hai');

function agregarSeparadorMiles(numero) {
    return numero.toLocaleString('es-ES');
}

function setResultImages(tipo1, tipo2) {
    imgitem1 = "<div class='resultado-content'><img src='images/" + tipo1 + "v.png'> ";
    imgitem2 = "<img src='images/" + tipo1 + "a.png'> ";
    imgitem3 = "<img src='images/" + tipo1 + "r.png'> ";
    imgitem4 = "<img src='images/" + tipo2 + "v.png'> ";
    imgitem5 = "<img src='images/" + tipo2 + "a.png'> ";
    imgitem6 = "<img src='images/" + tipo2 + "r.png'> ";
}

function setSteelImages(tipo) {
    imgacero1 = "<img src='images/" + tipo + "v.png'> ";
    imgacero2 = "<img src='images/" + tipo + "a.png'> ";
    imgacero3 = "<img src='images/" + tipo + "r.png'> ";
}

// Arma
document.getElementById('armaswitch').addEventListener('click', function() {
    setResultImages('psl', 'om');
    setSteelImages('acero');
    cobrearm = 800000;
    dsarm = 100000;
    resultado();
    setActiveBtn(this);
});

// Ropa
document.getElementById('ropaswitch').addEventListener('click', function() {
    setResultImages('quintaesencia', 'baratija');
    setSteelImages('acero');
    cobrearm = 400000;
    dsarm = 50000;
    resultado();
    setActiveBtn(this);
});

// Cuerno/Accesorios
document.getElementById('hornswitch').addEventListener('click', function() {
    setResultImages('frag', 'piedra');
    setSteelImages('platino');
    cobrearm = 800000;
    dsarm = 100000;
    resultado();
    setActiveBtn(this);
});

// Garra (mismo que Armas)
document.getElementById('garraR').addEventListener('click', function() {
    setResultImages('psl', 'om');
    setSteelImages('acero');
    cobrearm = 800000;
    dsarm = 800000;
    resultado();
    setActiveBtn(this);
});

// Ojo (mismo que Accesorios)
document.getElementById('ojitoR').addEventListener('click', function() {
    setResultImages('frag', 'piedra');
    setSteelImages('platino');
    cobrearm = 800000;
    dsarm = 800000;
    resultado();
    setActiveBtn(this);
});

function setActiveBtn(btn) {
    document.querySelectorAll('.tipo-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

document.getElementById('valor').addEventListener('click', resultado);

function resultado() {
    // Items PSL
    var userPsl = parseInt(psl.value) || 0;
    var userRpsl = parseInt(rpsl.value) || 0;
    var userHpsl = parseInt(hpsl.value) || 0;

    // Items OM
    var userC = parseInt(c.value) || 0;
    var userRc = parseInt(rc.value) || 0;
    var userHc = parseInt(hc.value) || 0;

    // Acero
    var userA = parseInt(a.value) || 0;
    var userRa = parseInt(ra.value) || 0;
    var userHa = parseInt(ha.value) || 0;

    // Recursos
    var userDs = parseInt(uds.value) || 0;
    var userPolv = parseInt(pol.value) || 0;
    var userCbreo = parseInt(cbr.value) || 0;
    var userMoneda = (parseInt(mpl.value) || 0) * 10000;
    var userCbr = userCbreo + userMoneda;

    // Cálculo de items faltantes
    var itemHpsl = 100 - userHpsl;
    var itemRpsl = 1000 - userRpsl - (10 * userHpsl);
    var itemPsl = (10 * itemRpsl) - userPsl;

    if (itemHpsl < 0) { itemHpsl = 0; itemRpsl = 0; itemPsl = 0; }
    if (itemRpsl < 0) { itemRpsl = 0; itemPsl = 0; }
    if (itemPsl < 0) { itemPsl = 0; }

    var itemHc = 100 - userHc;
    var itemRc = 1000 - userRc - (10 * userHc);
    var itemC = (10 * itemRc) - userC;

    if (itemHc < 0) { itemHc = 0; itemRc = 0; itemC = 0; }
    if (itemRc < 0) { itemRc = 0; itemC = 0; }
    if (itemC < 0) { itemC = 0; }

    // Acero necesario
    var aceroHt = 300 - userHa;
    var aceroRt = 3000 - userRa - (10 * userHa);
    var aceroT = (10 * aceroRt) - userA;

    if (aceroHt < 0) { aceroHt = 0; aceroRt = 0; aceroT = 0; }
    if (aceroRt < 0) { aceroRt = 0; aceroT = 0; }
    if (aceroT < 0) { aceroT = 0; }

    // Polvo mágico
    var polvu = (itemHpsl * 25 + itemRpsl * 2 + itemHc * 25 + itemRc * 2 + aceroHt * 25 + aceroRt * 2) - userPolv;
    if (polvu < 0) polvu = 0;

    // Cobre total
    var cobreT = (itemHpsl * 20000 + itemRpsl * 2000 + itemHc * 20000 + itemRc * 2000 + aceroHt * 20000 + aceroRt * 2000 + cobrearm) - userCbr;
    if (cobreT < 0) cobreT = 0;

    // Dragon's Soul
    var DsT = (itemHpsl * 5000 + itemRpsl * 1000 + itemHc * 5000 + itemRc * 1000 + aceroHt * 5000 + aceroRt * 1000 + dsarm) - userDs;
    if (DsT < 0) DsT = 0;

    // Mostrar resultados
    document.getElementById('resultado').innerHTML = imgitem1 + agregarSeparadorMiles(itemPsl) + imgitem2 + agregarSeparadorMiles(itemRpsl) + imgitem3 + agregarSeparadorMiles(itemHpsl);
    document.getElementById('resultado2').innerHTML = imgacero1 + agregarSeparadorMiles(aceroT) + imgacero2 + agregarSeparadorMiles(aceroRt) + imgacero3 + agregarSeparadorMiles(aceroHt);
    document.getElementById('resultado3').innerHTML = imgitem4 + agregarSeparadorMiles(itemC) + imgitem5 + agregarSeparadorMiles(itemRc) + imgitem6 + agregarSeparadorMiles(itemHc);
    document.getElementById('resultado4').innerHTML = "<div class='resultado-content'><img src='images/polv.png'> " + agregarSeparadorMiles(polvu) + " <img src='images/cobreimg.png'> " + agregarSeparadorMiles(cobreT) + " <img src='images/imgds.png'> " + agregarSeparadorMiles(DsT) + "</div>";
}