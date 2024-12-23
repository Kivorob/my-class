/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const {readFileSync} = require("node:fs");
const {join} = require("node:path");

exports.up = function (knex) {
    const sqlFileName = 'test.sql'
    const sqlFilePath = join(__dirname, `../sql/${sqlFileName}`);
    try {
        const sql = readFileSync(sqlFilePath, {encoding: 'utf-8'});
        console.log('Executing SQL:', sql);

        return knex.raw(sql)
            .then(() => {
                console.log('SQL executed successfully');
            })
            .catch(error => {
                console.error('Error executing SQL:', error);
                throw error;
            });
    } catch (error) {
        console.error(`Error reading SQL file: ${error.message}`);
        throw error;
    }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
