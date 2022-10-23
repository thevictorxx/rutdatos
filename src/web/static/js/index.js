import { buscarPorRut } from './services/buscarPorRut.js'
import { escribirNuevosDatos } from './controllers/escribirNuevosDatos.js'
import { escribirAlertaRutInvalido } from './controllers/escribirAlertaRutInvalido.js'
import { escribirSpinner } from './controllers/escribirSpinner.js'

const $inputRut = document.getElementById('inputRut')
const $btnBuscarPorRut = document.getElementById('btnBuscarPorRut')
const $respuertaBusqueda = document.getElementById('respuertaBusqueda')

$btnBuscarPorRut.addEventListener('click', async () => {
  escribirSpinner($respuertaBusqueda)

  const datosObtenidos = await buscarPorRut($inputRut.value)

  if (!datosObtenidos.isValidRut) {
    escribirAlertaRutInvalido($inputRut.value, $respuertaBusqueda)
    return
  }

  escribirNuevosDatos(datosObtenidos, $respuertaBusqueda)

  console.log(datosObtenidos)
})
