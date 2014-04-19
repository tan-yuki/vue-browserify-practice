var Vue = require('vue');

var app = new Vue({
    el: 'body',
    components: {
        one: require('./one.js'),
        two: require('./two.js')
    }
});

module.exports = app;
