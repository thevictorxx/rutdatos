/**
 *
 * @param {string} rut Rut ingresado
 * @param {object} lugar elemento donde se escribira
 */
export function escribirAlertaRutInvalido (rut, lugar) {
  lugar.innerHTML = `<div class="alert">
  <img src="img/error.png" />
  <span>El Rut "${rut}" <strong>no es valido</strong>.</span>
</div>`
}
