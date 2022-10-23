const rutService = require('../services/rutService')

const getDataByRut = async (req, res) => {
  const { rut } = req.params
  const dataByRut = await rutService.getDataByRut(rut)
  res.status(200).json(dataByRut)
}

module.exports = {
  getDataByRut
}
