const purifyText = require('../utils/purifyText')
const rutValidator = require('../utils/rutValidator')

/**
 *
 * @param {string} rut Format 12345678-9 | 12.345.678-9
 * @returns
 */
const getDataByRut = async (rut) => {
  const dataByRut = {
    isValidRut: false,
    rut,
    name: '',
    gender: '',
    address: '',
    city: ''
  }

  const isValidRutValidator = rutValidator(rut)

  if (!isValidRutValidator) {
    return dataByRut
  }

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ action: 'search_by_rut', rut })
  }

  const dataFechedByRut = await fetch('https://rutificador.org/backend.php', options)
    .then((response) => response.text())
    .then((response) => response)
    .catch((err) => console.error(err))

  const dataPurified = purifyText(dataFechedByRut)

  dataByRut.isValidRut = isValidRutValidator
  dataByRut.name = dataPurified[1]
  dataByRut.gender = dataPurified[2]
  dataByRut.address = dataPurified[3]
  dataByRut.city = dataPurified[4]

  return dataByRut
}

module.exports = {
  getDataByRut
}
