/**
 *
 * @param {string} mensaje Rut ingresado
 * @param {object} lugar elemento donde se escribira
 */
export function escribirMensajeAlerta (mensaje, lugar) {
  lugar.innerHTML = `<div class="alert">
  <img src="img/error.png" />
  <span>${mensaje}</span>
</div>`
}
