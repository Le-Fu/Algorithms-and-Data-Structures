/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  return address.split('.').join('[.]');
}

var address = "255.100.50.0"
// var address = "1.1.1.1"

debugger
defangIPaddr(address);

