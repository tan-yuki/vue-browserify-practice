var _ = require('lodash');
var parents = require('./parent.js');

module.exports = _.extend({}, parents, {

    data: {
        list: [
            'This',
            'is',
            'two'
        ]
    }

});
