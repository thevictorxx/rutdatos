const axios = require('axios')
const purifyText = require('../utils/purifyText')
const rutValidator = require('../utils/rutValidator')

/**
 *
 * @param {string} rut Format 12345678-9 | 12.345.678-9
 * @returns
 */
const getDataByRut = async (rut) => {
  const URL_API_EXTERNA = 'https://rutificador.org/backend.php'
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
    url: URL_API_EXTERNA,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: { action: 'search_by_rut', rut }
  }

  const dataFechedByRut = await axios
    .request(options)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.error(error)
    })

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
