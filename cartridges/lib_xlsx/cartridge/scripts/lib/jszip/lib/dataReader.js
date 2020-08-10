'use strict';

var utils = require('./utils');

function DataReader(data) {
    this.data = null;
    this.length = 0;
    this.index = 0;
}

DataReader.prototype = {
    checkOffset: function checkOffset(offset) {
        this.checkIndex(this.index + offset);
    },
    checkIndex: function checkIndex(newIndex) {
        if (this.length < newIndex || newIndex < 0) {
            throw new Error(
                'End of data reached (data length = ' +
                    this.length +
                    ', asked index = ' +
                    newIndex +
                    '). Corrupted zip ?'
            );
        }
    },
    setIndex: function setIndex(newIndex) {
        this.checkIndex(newIndex);
        this.index = newIndex;
    },
    skip: function skip(n) {
        this.setIndex(this.index + n);
    },
    byteAt: function byteAt(i) {},
    readInt: function readInt(size) {
        var result = 0,
            i;
        this.checkOffset(size);

        for (i = this.index + size - 1; i >= this.index; i--) {
            result = (result << 8) + this.byteAt(i);
        }

        this.index += size;
        return result;
    },
    readString: function readString(size) {
        return utils.transformTo('string', this.readData(size));
    },
    readData: function readData(size) {},
    lastIndexOfSignature: function lastIndexOfSignature(sig) {},
    readDate: function readDate() {
        var dostime = this.readInt(4);
        return new Date(
            ((dostime >> 25) & 0x7f) + 1980,
            ((dostime >> 21) & 0x0f) - 1,
            (dostime >> 16) & 0x1f,
            (dostime >> 11) & 0x1f,
            (dostime >> 5) & 0x3f,
            (dostime & 0x1f) << 1
        );
    }
};
module.exports = DataReader;
