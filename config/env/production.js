// create new file ./config/env/development.js (2)
// and ./config/env/production.js (3)
module.exports = {
       //mongoUri: 'mongodb://localhost/myFirstNode',
       // or use 
       //mongoUri: 'mongodb://admin:password@localhost:27017/TestDB1',
       mongoUri :'mongodb://admin:password@ds163053.mlab.com:63053/posystem',
       debug: true,
       sessionSecret: 'dev_secret_key'
}