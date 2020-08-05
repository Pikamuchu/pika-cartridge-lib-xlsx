const sinon = require('sinon');
const { assert } = require('chai');
const searchquire = require('searchquire');
const fs = require('fs');

describe('XLSX library', () => {
    let XLSX;

    before(() => {
        // initialize test config and spies
        XLSX = searchquire(
            '*/cartridge/scripts/lib/xlsx/index',
            {
                basePath: '../cartridges/lib_xlsx/cartridge',
                pattern: '*/cartridge/(.*)',
                maxSearchModuleIterations: 20
            },
            {
                '*/cartridge/scripts/lib/fs/index': fs
            }
        );
    });

    beforeEach(() => {
        // reset spies
    });

    let data = [
        { S: 1, h: 2, e: 3, e_1: 4, t: 5, J: 6, S_1: 7 },
        { S: 2, h: 3, e: 4, e_1: 5, t: 6, J: 7, S_1: 8 }
    ];

    describe('XLSX initialization', () => {
        it('XLSX defined', () => {
            assert.isDefined(XLSX);
        });

        it('XLSX write excel from json', () => {
            const ws = XLSX.utils.json_to_sheet(data);
            const wb = XLSX.utils.book_new();

            XLSX.utils.book_append_sheet(wb, ws, 'SheetJS');

            XLSX.writeFile(wb, __dirname + '/examples/sheet.xlsx');
        });

        it('XLSX read excel to json', () => {
            const wb = XLSX.readFile(__dirname + '/examples/sheet.xlsx');

            assert.isDefined(wb);

            var result = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);

            assert.isDefined(result);
            assert.equal(JSON.stringify(result), JSON.stringify(data));
        });
    });
});
