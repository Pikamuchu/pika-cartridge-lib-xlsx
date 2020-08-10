'use strict';

var utils = require('./utils');

var Uint8ArrayWriter = function Uint8ArrayWriter(length) {
    this.data = new Uint8Array(length);
    this.index = 0;
};

Uint8ArrayWriter.prototype = {
    append: function append(input) {
        if (input.length !== 0) {
            input = utils.transformTo('uint8array', input);
            this.data.set(input, this.index);
            this.index += input.length;
        }
    },
    finalize: function finalize() {
        return this.data;
    }
};
module.exports = Uint8ArrayWriter;
