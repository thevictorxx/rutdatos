export function escribirNuevosDatos (datos, lugar) {
  lugar.innerHTML = `<table>
  <thead>
    <tr>
      <th>Rut</th>
      <th>Nombre</th>
      <th>Genero</th>
      <th>Dirección</th>
      <th>Ciudad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${datos.rut}</td>
      <td>${datos.name}</td>
      <td>${datos.gender}</td>
      <td>${datos.address}</td>
      <td>${datos.city}</td>
    </tr>
  </tbody>
</table>`
}
