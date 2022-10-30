import { buscarPorRut } from './services/buscarPorRut.js'
import { escribirNuevosDatos } from './controllers/escribirNuevosDatos.js'
import { escribirAlertaRutInvalido } from './controllers/escribirAlertaRutInvalido.js'
import { escribirSpinner } from './controllers/escribirSpinner.js'
import { escribirMensajeAlerta } from './controllers/escribirMensajeAlerta.js'

const $inputRut = document.getElementById('inputRut')
const $btnBuscarPorRut = document.getElementById('btnBuscarPorRut')
const $respuertaBusqueda = document.getElementById('respuertaBusqueda')

$btnBuscarPorRut.addEventListener('click', async () => {
  if ($inputRut.value.replaceAll(' ', '') === '') {
    console.log($inputRut.value)
    escribirMensajeAlerta('Debes introducir un Rut para iniciar la búsqueda.', $respuertaBusqueda)
    return
  }

  escribirSpinner($respuertaBusqueda)

  const datosObtenidos = await buscarPorRut($inputRut.value.trim())

  if (!datosObtenidos.isValidRut) {
    escribirAlertaRutInvalido($inputRut.value, $respuertaBusqueda)
    return
  }

  escribirNuevosDatos(datosObtenidos, $respuertaBusqueda)

  console.log(datosObtenidos)
})
