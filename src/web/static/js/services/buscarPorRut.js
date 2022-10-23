export async function buscarPorRut (rut) {
  const RUTA = `${window.location.origin}/api/v1/rut/${rut}`
  const datosObtenidos = await fetch(RUTA)
    .then((response) => response.json())
    .then((response) => response)

  return datosObtenidos
}
