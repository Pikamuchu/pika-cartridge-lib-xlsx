'use strict';

function CompressedObject() {
    this.compressedSize = 0;
    this.uncompressedSize = 0;
    this.crc32 = 0;
    this.compressionMethod = null;
    this.compressedContent = null;
}

CompressedObject.prototype = {
    getContent: function getContent() {
        return null;
    },
    getCompressedContent: function getCompressedContent() {
        return null;
    }
};
module.exports = CompressedObject;
