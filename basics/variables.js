const accountId = 145553
let accountEmail = "rameshtmg@gmail.com"
var accountPassword = "12345"
accountCity = "Kathmandu"

// accountId = 2 // not allowed
 /*
Var is not used because of the issue in the block and functional scope
*/

accountEmail = "abs@gmai.com"
accountPassword = "jdfhjs;h"
accountCity = "Banepa"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword,accountCity]);