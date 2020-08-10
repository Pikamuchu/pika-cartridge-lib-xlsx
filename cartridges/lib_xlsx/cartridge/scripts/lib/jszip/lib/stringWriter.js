'use strict';

var utils = require('./utils');

var StringWriter = function StringWriter() {
    this.data = [];
};

StringWriter.prototype = {
    append: function append(input) {
        input = utils.transformTo('string', input);
        this.data.push(input);
    },
    finalize: function finalize() {
        return this.data.join('');
    }
};
module.exports = StringWriter;
