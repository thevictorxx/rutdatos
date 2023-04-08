const getDataByName = async (req, res) => {
  const { nombre } = req.params
  const dataByName = nombre
  res.status(200).json({ nombre: dataByName })
}

module.exports = {
  getDataByName
}
