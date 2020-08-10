'use strict';

exports.STORE = {
    magic: '\x00\x00',
    compress: function compress(content) {
        return content;
    },
    uncompress: function uncompress(content) {
        return content;
    },
    compressInputType: null,
    uncompressInputType: null
};
exports.DEFLATE = require('./flate');
