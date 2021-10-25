const request = require('request')

module.exports = function (uri, done) {
  request(`${uri}`, (err,res,body) => {
    if (err) {
      throw err
    } else {
      // console.log(res)
      done(body)
    }
  })
}