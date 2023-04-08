/**
 *
 * @param {string} textToPurify
 * @returns {[string]}
 */
const purifyText = (textToPurify) => {
  const newTextToPurify = textToPurify

  console.log(textToPurify)

  // Remove all inesesary text
  const purifyText = newTextToPurify
    .split('<table class="table table-hover">')[1]
    .split('</table>')[0].split('<tr tabindex="1">')[1]
    .split('</tr>')[0]
    .replace(' style="white-space: nowrap;', '')
    .replaceAll('"', '')
    .replaceAll('</td>', '')
    .split('<td>')
    .map(str => str.trim())

  purifyText.shift()

  // return array
  return purifyText
}

module.exports = purifyText
