let data = require('./data');

data.request(function(callback) {
    for (let i = 0; i < callback.length; i++) {
        console.log(callback[i].message);
    }
});