'use strict';

function makeTable() {
    var c,
        table = [];

    for (var n = 0; n < 256; n++) {
        c = n;

        for (var k = 0; k < 8; k++) {
            c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
        }

        table[n] = c;
    }

    return table;
}

var crcTable = makeTable();

function crc32(crc, buf, len, pos) {
    var t = crcTable,
        end = pos + len;
    crc ^= -1;

    for (var i = pos; i < end; i++) {
        crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xff];
    }

    return crc ^ -1;
}

module.exports = crc32;
