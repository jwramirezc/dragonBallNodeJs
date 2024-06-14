const ocultarSecciones1 = document.getElementById('seccion-muestra-seleccion')
const ocultarSecciones2 = document.getElementById('select-ataque')
const ocultarSecciones3 = document.getElementById('seccion-ataques')
const ocultarSecciones4 = document.getElementById('reiniciar')
const ocultarSecciones5 = document.getElementById('game-over')
const ocultarSecciones6 = document.getElementById('agrupa-btn-mover')
const btnguerreroJugador = document.getElementById('btn-batalla')
const eligeGuerreroGoku = document.getElementById('eligiendo-guerrero')
const eligeGuerreroBills = document.getElementById('eligiendo-guerrero')
const eligeGuerreroFreezer = document.getElementById('eligiendo-guerrero')
const eligeGuerreroKrillin = document.getElementById('eligiendo-guerrero')
const eligeGuerreroPicolo = document.getElementById('eligiendo-guerrero')
const eligeGuerreroVegueta = document.getElementById('eligiendo-guerrero')
const spanguerreroJugador = document.getElementById('guerrero-jugador');
const guerreroElegido = document.getElementById('guerrero-elegido')
const alertaGuerrero = document.getElementById('eligiendo-guerrero')
const ocultarSeleccionGuerrero = document.getElementById('select-guerrero')
const ocultarBotonBatalla = document.getElementById('btn-batalla')
const spanguerreroEnemigo = document.getElementById('guerrero-enemigo')
const enemigoElegido = document.getElementById('enemigo-elegido')
const spanAtaqueJugador = document.getElementById('ataque-jugador')
const spanAtaqueEnemigo = document.getElementById('ataque-enemigo')
const sectionMensajesJugador = document.getElementById('ataque-jugador')
const sectionMensajesEnemigo = document.getElementById('ataque-enemigo')
const spanResultadoAtaque = document.getElementById('resultado-combate')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const seccionPuntajeJugador = document.getElementById('seccion-puntaje-jugador')
const seccionPuntajeEnemigo = document.getElementById('seccion-puntaje-enemigo')
const spanFinalizarJuego = document.getElementById('fin-juego')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')
const sectionVerMapa = document.getElementById('ver-mapa')

const mapa = document.getElementById('mapa')
let lienzo = mapa.getContext("2d")
let mapaBackground = new Image()
mapaBackground.src = './img/mapa.png'
let objetoJugador
let objetoEnemigo
let jugadorId = null
let enemigoId = null

combateRealizado = false
let intervaloJugador
let intervaloEnemigo
let ataqueJugador;
let ataqueEnemigo;
let ataquesEnemigo;
let resultadoAtaque;
let vidasJugador = 0;
let vidasEnemigo = 0;
let botones = []
let arregloAtaquesJugador = []
let arregloAtaquesEnemigo = []
let alturaBuscada
let anchoMapa = window.innerWidth - 20
alturaBuscada = anchoMapa * 600 / 800
mapa.width = anchoMapa
mapa.height = alturaBuscada
const anchoMaxMapa = 1000
if (anchoMapa > anchoMaxMapa) {
    mapa.width = anchoMaxMapa
    mapa.height = 700

}

let empates = 0
let victorias = 0
let perdidas = 0
let inputgoku
let inputbills
let inputfreezer
let inputkrillin
let inputpicolo
let inputvegueta
let imagenSelect_goku
let imagenSelect_bills
let imagenSelect_freezer
let imagenSelect_krillin
let imagenSelect_picolo
let imagenSelect_vegueta
let botonFuego
let botonAgua
let botonTierra
let botonReiniciar
let labelGoku
let labelbills
let labelfreezer
let labelkrillin
let labelpicolo
let labelvegueta
let intervalo

const rutaImagenGoku = "./img/goku.png"
const rutaImagenBills = "./img/bills.png"
const rutaImagenFreezer = "./img/freezer.png"
const rutaImagenKrillin = "./img/krillin.png"
const rutaImagenPicolo = "./img/picoro.png"
const rutaImagenVegueta = "./img/vegueta.png"

class Guerrero {
    constructor(nombre, foto, vida, x, y, id = null ) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = aleatorio(0, mapa.width - 100)
        this.y = aleatorio(0, mapa.height - 100)
        this.ancho = 60
        this.alto = 60
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarGuerrero() {
        lienzo.drawImage(this.mapaFoto, this.x, this.y, this.ancho, this.alto)
    }

}

let guerreros = []
let guerrerosEnemigos = []
let opcionGuerreros
let opcionAtaques
let guerreroJugador
let goku = new Guerrero('Goku', './img/goku.png', 5)
let bills = new Guerrero('Bills', './img/bills.png', 5)
let freezer = new Guerrero('Freezer', './img/freezer.png', 5)
let krillin = new Guerrero('Krillin', './img/krillin.png', 5)
let picolo = new Guerrero('Picolo', './img/picoro.png', 5)
let vegueta = new Guerrero('Vegueta', './img/vegueta.png', 5)

const Goku_Ataques = [
    { nombre: 'Kame Hame 🔥', id: 'btn-fuego' },
    { nombre: 'Kame Hame 🔥', id: 'btn-fuego' },
    { nombre: 'Haikyuken 💧', id: 'btn-agua' },
    { nombre: 'Kame Hame 🔥', id: 'btn-fuego' },
    { nombre: 'Genki Dama 🌎', id: 'btn-tierra' },
]

const Bills_Ataques =[
    { nombre: 'Haikyuken 💧', id: 'btn-agua' },
    { nombre: 'Genki Dama 🌎', id: 'btn-tierra' },
    { nombre: 'Genki Dama 🌎', id: 'btn-tierra' },
    { nombre: 'Kame Hame 🔥', id: 'btn-fuego' },
    { nombre: 'Genki Dama 🌎', id: 'btn-tierra' },
]

const Krillin_Ataques = [
    { nombre: 'Haikyuken 💧', id: 'btn-agua' },
    { nombre: 'Haikyuken 💧', id: 'btn-agua' },
    { nombre: 'Kame Hame 🔥', id: 'btn-fuego' },
    { nombre: 'Kame Hame 🔥', id: 'btn-fuego' },
    { nombre: 'Genki Dama 🌎', id: 'btn-tierra' },
]

const Picolo_Ataques = [
    { nombre: 'Haikyuken 💧', id: 'btn-agua' },
    { nombre: 'Haikyuken 💧', id: 'btn-agua' },
    { nombre: 'Haikyuken 💧', id: 'btn-agua' },
    { nombre: 'Kame Hame 🔥', id: 'btn-fuego' },
    { nombre: 'Genki Dama 🌎', id: 'btn-tierra' },
]

const Freezer_Ataques = [
    { nombre: 'Haikyuken 💧', id: 'btn-agua' },
    { nombre: 'Genki Dama 🌎', id: 'btn-tierra' },
    { nombre: 'Genki Dama 🌎', id: 'btn-tierra' },
    { nombre: 'Kame Hame 🔥', id: 'btn-fuego' },
    { nombre: 'Genki Dama 🌎', id: 'btn-tierra' },
]

const Vegueta_Ataques = [
    { nombre: 'Haikyuken 💧', id: 'btn-agua' },
    { nombre: 'Kame Hame 🔥', id: 'btn-fuego' },
    { nombre: 'Haikyuken 💧', id: 'btn-agua' },
    { nombre: 'Kame Hame 🔥', id: 'btn-fuego' },
    { nombre: 'Genki Dama 🌎', id: 'btn-tierra' },
]

goku.ataques.push(...Goku_Ataques)
bills.ataques.push(...Bills_Ataques)
krillin.ataques.push(...Krillin_Ataques)
picolo.ataques.push(...Picolo_Ataques)
freezer.ataques.push(...Freezer_Ataques)
vegueta.ataques.push(...Vegueta_Ataques)

guerreros.push(goku, bills, freezer, krillin, picolo, vegueta)

function iniciarJuego() {
    ocultarSecciones1.style.display = "none"
    ocultarSecciones2.style.display = "none"
    ocultarSecciones3.style.display = "none"
    ocultarSecciones4.style.display = "none"
    ocultarSecciones5.style.display = "none"
    ocultarSecciones6.style.display = "none"
    seccionPuntajeJugador.style.display = "none"
    seccionPuntajeEnemigo.style.display = "none"
    sectionVerMapa.style.display = "none"
    enemigoElegido.style.display = "none"

    guerreros.forEach((guerrero) => {
        opcionGuerreros = `
        <div class="tarjeta">
        <input type="radio" name="guerrero" id=${guerrero.nombre} />
        <label for=${guerrero.nombre} id="label-${guerrero.nombre}">${guerrero.nombre}</label>
        <img src="${guerrero.foto}" alt=${guerrero.nombre} id="${guerrero.nombre}-select">
        </div>
        `
        contenedorTarjetas.innerHTML += opcionGuerreros;

        inputgoku = document.getElementById('Goku');
        inputbills = document.getElementById('Bills');
        inputfreezer = document.getElementById('Freezer');
        inputkrillin = document.getElementById('Krillin');
        inputpicolo = document.getElementById('Picolo');
        inputvegueta = document.getElementById('Vegueta');

        imagenSelect_goku = document.getElementById('Goku-select')
        imagenSelect_bills = document.getElementById('Bills-select')
        imagenSelect_freezer = document.getElementById('Freezer-select')
        imagenSelect_krillin = document.getElementById('Krillin-select')
        imagenSelect_picolo = document.getElementById('Picolo-select')
        imagenSelect_vegueta = document.getElementById('Vegueta-select')

        labelGoku = document.getElementById('label-Goku')
        labelbills = document.getElementById('label-Bills')
        labelfreezer = document.getElementById('label-Freezer')
        labelkrillin = document.getElementById('label-Krillin')
        labelpicolo = document.getElementById('label-Picolo')
        labelvegueta = document.getElementById('label-Vegueta')
    })

    //hacer que las imagenes funcionen al click
    imagenSelect_goku.addEventListener('click', seleccionaImagen_goku)
    imagenSelect_bills.addEventListener('click', seleccionaImagen_bills)
    imagenSelect_freezer.addEventListener('click', seleccionaImagen_freezer)
    imagenSelect_krillin.addEventListener('click', seleccionaImagen_krillin)
    imagenSelect_picolo.addEventListener('click', seleccionaImagen_picolo)
    imagenSelect_vegueta.addEventListener('click', seleccionaImagen_vegueta)
    btnguerreroJugador.addEventListener('click', seleccionarguerreroJugador)
    //hacer que los label funcionen al click
    labelGoku.addEventListener('click', seleccionaImagen_goku)
    labelbills.addEventListener('click', seleccionaImagen_bills)
    labelfreezer.addEventListener('click', seleccionaImagen_freezer)
    labelkrillin.addEventListener('click', seleccionaImagen_krillin)
    labelpicolo.addEventListener('click', seleccionaImagen_picolo)
    labelvegueta.addEventListener('click', seleccionaImagen_vegueta)
    unirseAlJuego()
}

function unirseAlJuego() {
    fetch("http://jorge07.local:8081/unirse")
        .then(function (res) {
           // console.log(res)
            if (res.ok) {
                res.text()
                    .then(function (respuesta) {
                      console.log(respuesta)
                      jugadorId = respuesta
                    })
            }
        })
}

function seleccionaImagen_goku() {
    inputgoku.checked = true
    eligeGuerreroGoku.innerHTML = "Elegiste a " + inputgoku.id
}

function seleccionaImagen_bills() {
    eligeGuerreroBills.innerHTML = "Elegiste a " + inputbills.id
    inputbills.checked = true
}

function seleccionaImagen_freezer() {
    eligeGuerreroFreezer.innerHTML = "Elegiste a " + inputfreezer.id
    inputfreezer.checked = true
}

function seleccionaImagen_krillin() {
    eligeGuerreroKrillin.innerHTML = "Elegiste a " + inputkrillin.id
    inputkrillin.checked = true
}

function seleccionaImagen_picolo() {
    eligeGuerreroPicolo.innerHTML = "Elegiste a " + inputpicolo.id
    inputpicolo.checked = true
}

function seleccionaImagen_vegueta() {
    eligeGuerreroVegueta.innerHTML = "Elegiste a " + inputvegueta.id
    inputvegueta.checked = true
}

function seleccionarguerreroJugador() {
    if (inputgoku.checked) {
        spanguerreroJugador.innerHTML = inputgoku.id
        guerreroJugador = inputgoku.id
        guerreroElegido.src = rutaImagenGoku
        ocultarSeccionesInicial()
    }
    else if (inputbills.checked) {
        spanguerreroJugador.innerHTML = inputbills.id
        guerreroElegido.src = rutaImagenBills
        guerreroJugador = inputbills.id
        ocultarSeccionesInicial()
    }
    else if (inputfreezer.checked) {
        spanguerreroJugador.innerHTML = inputfreezer.id
        guerreroElegido.src = rutaImagenFreezer
        guerreroJugador = inputfreezer.id
        ocultarSeccionesInicial()
    }
    else if (inputkrillin.checked) {
        spanguerreroJugador.innerHTML = inputkrillin.id
        guerreroJugador = inputkrillin.id
        guerreroElegido.src = rutaImagenKrillin
        ocultarSeccionesInicial()
    }
    else if (inputpicolo.checked) {
        spanguerreroJugador.innerHTML = inputpicolo.id
        guerreroJugador = inputpicolo.id
        guerreroElegido.src = rutaImagenPicolo
        ocultarSeccionesInicial()
    }
    else if (inputvegueta.checked) {
        spanguerreroJugador.innerHTML = inputvegueta.id
        guerreroJugador = inputvegueta.id
        guerreroElegido.src = rutaImagenVegueta
        ocultarSeccionesInicial()
    }
    else {
        alertaGuerrero.innerHTML = 'Debes elegir un guerrero'
    }
    extraerAtaquesJugador(guerreroJugador)
    seleccionarGuerreroFrontToBack(guerreroJugador)
    iniciarMapa()
    pintarCanvas()
}

function seleccionarGuerreroFrontToBack(guerreroJugador){
    fetch(`http://jorge07.local:8081/guerrero/${jugadorId}`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            guerreroElegido: guerreroJugador
        })
    })
}

function extraerAtaquesJugador(guerreroJugador) {
    let ataques;
    for (let i = 0; i < guerreros.length; i++) {
        if (guerreroJugador === guerreros[i].nombre) {
            ataques = guerreros[i].ataques
            objetoJugador = guerreros[i]
        }
    }
    ocultarSecciones6.style.display = "flex"
    mostrarAtaquesJugador(ataques)
    secuenciaAtaque()
}

function mostrarAtaquesJugador(ataques) {
    ataques.forEach((ataque) => {
        opcionAtaques = `<button id=${ataque.id} class="botones BAtaque">${ataque.nombre}</button>`
        contenedorAtaques.innerHTML += opcionAtaques;
    })
    botones = document.querySelectorAll('.BAtaque')
    botonReiniciar = document.getElementById('btn-reiniciar')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            //console.log(e);
            if (e.target.textContent === 'Kame Hame 🔥') {
                arregloAtaquesJugador.push('Kame Hame 🔥');
                boton.style.background = '#656464'
                boton.disabled = true
                ataqueJugador = 'Kame Hame 🔥'

            } else if (e.target.textContent === 'Haikyuken 💧') {
                arregloAtaquesJugador.push('Haikyuken 💧');
                boton.style.background = '656464'
                boton.disabled = true
                ataqueJugador = 'Haikyuken 💧'

            } else if (e.target.textContent === 'Genki Dama 🌎') {

                arregloAtaquesJugador.push('Genki Dama 🌎');
                boton.style.background = '656464'
                boton.disabled = true
                ataqueJugador = 'Genki Dama 🌎'
            }
            if (arregloAtaquesJugador.length === 5) {
                enviarAtaques()
            }
        });
    });
}

function enviarAtaques(){
    fetch(`http://jorge07.local:8081/guerrero/${jugadorId}/ataques`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: arregloAtaquesJugador
        })
    })
     intervalo = setInterval(obtenerAtaques, 100)
}

function seleccionarGuerreroEnemigo(enemigo) {
    spanguerreroEnemigo.innerHTML = enemigo.nombre
    enemigoElegido.src = enemigo.foto
    ataquesEnemigo = enemigo.ataques
    clearInterval(intervaloJugador);
}

function obtenerAtaques(){

    fetch(`http://jorge07.local:8081/guerrero/${enemigoId}/ataques`)
        .then(function(res){
            if(res.ok){
                res.json()
                    .then(function({ataques}){
                        if (ataques.length === 5) {
                            arregloAtaquesEnemigo = ataques
                            clearInterval(intervalo);
                            if(!combateRealizado){
                                combate()
                                combateRealizado = true
                            }
                        }
                    })
            }
        })
}

function combate() {
    
    
     
     for (let index = 0; index < arregloAtaquesJugador.length; index++) {
         if ((arregloAtaquesJugador[index]) == (arregloAtaquesEnemigo[index])) {
            empates++
         } else if ((arregloAtaquesJugador[index] == 'Kame Hame 🔥' && arregloAtaquesEnemigo[index] == 'Genki Dama 🌎') || (arregloAtaquesJugador[index] == 'Haikyuken 💧' && arregloAtaquesEnemigo[index] == 'Kame Hame 🔥') || (arregloAtaquesJugador[index] == 'Genki Dama 🌎' && arregloAtaquesEnemigo[index] == 'Haikyuken 💧')) {
             victorias++
             vidasJugador = victorias
             spanVidasJugador.innerHTML = victorias
         } else {
             perdidas++
             vidasEnemigo = perdidas
             spanVidasEnemigo.innerHTML = perdidas
         }
     }

    definicionCombate()
    crearMensajeAtaqueJugador(arregloAtaquesJugador)
    crearMensajeAtaqueEnemigo(arregloAtaquesEnemigo)

    botonReiniciar.addEventListener('click', reiniciarJuego)
 }

 function crearMensajeAtaqueJugador() {
    for (let index = 0; index < arregloAtaquesJugador.length; index++){
        let parrafo = document.createElement('p')
        parrafo.innerHTML = arregloAtaquesJugador[index]
        spanAtaqueJugador.appendChild(parrafo)
    }
}

 function crearMensajeAtaqueEnemigo() {
    for (let index = 0; index < arregloAtaquesEnemigo.length; index++){
        let parrafo = document.createElement('p')
        parrafo.innerHTML = arregloAtaquesEnemigo[index]
        spanAtaqueEnemigo.appendChild(parrafo)
    }
}

function definicionCombate() {

    ocultarSecciones3.style.display = "flex"

    if (victorias == perdidas) {
        spanResultadoAtaque.innerHTML = "EMPATE"
    } else if (victorias > perdidas) {
        spanResultadoAtaque.innerHTML = "FELICIDADES GANASTE"
    } else {
        spanResultadoAtaque.innerHTML = "LO SIENTO, PERDISTE"
    }
    ocultarSecciones4.style.display = "flex"
    ocultarSecciones5.style.display = 'flex'
    seccionPuntajeJugador.style.display = "flex"
    seccionPuntajeEnemigo.style.display = "flex"
}

function defineVidas() {
   spanVidasJugador.innerHTML = vidasJugador
   spanVidasEnemigo.innerHTML = vidasEnemigo
}

function ocultarSeccionesInicial() {
   sectionVerMapa.style.display = 'flex'
   ocultarSecciones5.style.display = "none"
   ocultarSeleccionGuerrero.style.display = "none"
   ocultarBotonBatalla.style.display = "none"
}

function pintarCanvas() {
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    objetoJugador.x = objetoJugador.x + objetoJugador.velocidadX
    objetoJugador.y = objetoJugador.y + objetoJugador.velocidadY
    lienzo.drawImage(mapaBackground, 0, 0, mapa.width, mapa.height)
    objetoJugador.pintarGuerrero()

    enviarPosicion(objetoJugador.x, objetoJugador.y)

    guerrerosEnemigos.forEach(function(guerreroJugador){

        if(guerreroJugador != undefined){
            guerreroJugador.pintarGuerrero() 
            revisarColision(guerreroJugador)
        }


    })
}

function enviarPosicion(x, y){
    fetch(`http://jorge07.local:8081/guerrero/${jugadorId}/posicion/`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x: x,
            y: y
        })
    })
    .then(function(res){
        if (res.ok){
            res.json()
                .then(function({enemigos}){
                    guerrerosEnemigos = enemigos.map(function(enemigo){
                        let guerreroEnemigo = null

                        if(enemigo.guerrero != undefined){
                            const enemigoNombre = enemigo.guerrero.nombre || ""
                            if (enemigoNombre === 'Goku'){
                                guerreroEnemigo = new Guerrero('Goku', './img/goku.png', 5, enemigo.id)
                            }else if(enemigoNombre === 'Bills'){
                                guerreroEnemigo = new Guerrero('Bills', './img/bills.png', 5, enemigo.id)
                            }else if (enemigoNombre === 'Freezer'){
                                guerreroEnemigo = new Guerrero('Freezer', './img/freezer.png', 5, enemigo.id)
                            }else if(enemigoNombre === 'Krillin' ){
                                guerreroEnemigo = new Guerrero('Krillin', './img/krillin.png', 5, enemigo.id)
                            }else if(enemigoNombre === 'Picolo'){
                                guerreroEnemigo = new Guerrero('Picolo', './img/picoro.png', 5, enemigo.id)                        
                            }else if(enemigoNombre === 'Vegueta'){
                                guerreroEnemigo = new Guerrero('Vegueta', './img/vegueta.png', 5, enemigo.id)
                            }
                            guerreroEnemigo.x = enemigo.x
                            guerreroEnemigo.y = enemigo.y
                            guerreroEnemigo.id = enemigo.id
                            //console.log(enemigo.id)
                            return guerreroEnemigo
                        }
                    })                 
            })
        }
    })
}

function presionarTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
        case 'W':
        case 'w':
            moverGuerreroUp()
            break;
        case 'ArrowDown':
        case 'S':
        case 's':
            moverGuerreroDown()
            break;
        case 'ArrowRight':
        case 'D':
        case 'd':
            moverGuerreroRight()
            break;
        case 'ArrowLeft':
        case 'A':
        case 'a':
            moverGuerreroLeft()
            break;

        default:
            break;
    }
}

function moverGuerreroRight() {
    objetoJugador.velocidadX = 5
}

function moverGuerreroLeft() {
    objetoJugador.velocidadX = - 5
}

function moverGuerreroUp() {
    objetoJugador.velocidadY = - 5
}

function moverGuerreroDown() {
    objetoJugador.velocidadY = + 5
}

function detenerMovimiento() {
    objetoJugador.velocidadX = 0
    objetoJugador.velocidadY = 0
}

function iniciarMapa() {
    intervaloJugador = setInterval(pintarCanvas, 200)
    window.addEventListener('keydown', presionarTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const izquierdaEnemigo = enemigo.x
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const arribaJugador = objetoJugador.y
    const abajoJugador = objetoJugador.y + objetoJugador.alto
    const izquierdaJugador = objetoJugador.x
    const derechaJugador = objetoJugador.x + objetoJugador.ancho

    if (abajoJugador < arribaEnemigo ||
        arribaJugador > abajoEnemigo ||
        derechaJugador < izquierdaEnemigo ||
        izquierdaJugador > derechaEnemigo) {
        return;
        
    }
    detenerMovimiento()

    enemigoId = enemigo.id
 
    sectionVerMapa.style.display = "none"
    enemigoElegido.style.display = "flex"
    ocultarSecciones2.style.display = "flex"
    ocultarSecciones1.style.display = 'flex'
    ocultarSecciones6.style.display = "none"
    seleccionarGuerreroEnemigo(enemigo)

}

function reiniciarJuego() {
    location.reload();
}
 
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)