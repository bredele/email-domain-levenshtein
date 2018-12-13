/**
 * Dependencies
 */

const distance = require('js-levenshtein')
const domains = require('email-domain-popular')

/**
 * Give suggestion based on levenshtein distance between the given email
 * and a list of popular domains.
 *
 * @param {String} address
 * @return {String}
 * @api public
 */

module.exports = (address) => {
  const [left, domain] = address.split('@')
  if (domain) {
    const suggestions = domains.sort((a, b) => {
      return distance(a, domain) - distance(b, domain)
    })
    return left + '@' + suggestions[0]
  }
}
