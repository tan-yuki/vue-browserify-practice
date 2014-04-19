
module.exports = {
    data: {
        list: [
        ]
    },

    computed: {
        msg: function() {
            return this.list.join(' ');
        }
    }
};
