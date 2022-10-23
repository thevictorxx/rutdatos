/**
 *
 * @param {string} textToPurify
 * @returns {[string]}
 */
const purifyText = (textToPurify) => {
  const newTextToPurify = textToPurify

  // Remove all inesesary text
  const purifyText = newTextToPurify
    .replace(
      '<table class="table table-striped table-hover" ><thead class="thead-dark"><tr><th class="col-xs-2">RUT</th><th>Nombre</th><th>Sexo</th><th>Dirección</th><th>Ciudad</th></tr></thead></tbody><tr>',
      ''
    )
    .replace('</tr><tr></tr></tbody></table>', '')

  // Transform into array
  const arrText = purifyText.split('</td>')

  // Remove the last empty item
  arrText.pop()

  // Remove all inesesary text again
  const finalArray = arrText.map((item) => {
    return item.replace('<td>', '')
  })

  // return array
  return finalArray
}

module.exports = purifyText
