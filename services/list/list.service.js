const knex = require('../knex');

class ListService {
    static async readUrls(req, res) {
        try {
           const result = await knex.select().from('url');
           return result;
        } catch (e) {
            console.error(e);
            throw e;
        }
    };
};

module.exports = ListService;