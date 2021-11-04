const e = require('express');
const knex = require('../knex');

class ResultModel {

    // 특정 url 정보 조회
    static async readUrl(origin) {
        try {
            const result = await knex.select().from('url').where('origin_url',origin);
            return result;
        } catch (e) {
            console.error(e);
            throw e;
        }
    };
    
    // 원본 url 조회

    static async readOriginUrl(shortenUrl) {
        try {
            const result = await knex.select('origin_url').from('url').where('shorten_url', shortenUrl);
            return result;
        } catch (e) {
            console.error(e);
            throw e;
        }
    };

    // 원본 url 저장
    static async postOriginUrl(origin) {
        try {
            const myRegExp = /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi;
            if(myRegExp.test(origin) == true) {
                const result = await knex.insert({ origin_url: origin }).into('url');
                return result;
            } else {
                throw 'Error';
            }
        } catch (e) {
            console.error(e);
            throw e;
        }
    };

    // short url 저장
    static async postShortUrl(num, shortUrl) {
        try {
            const result = await knex('url').where({ id : num }).update({ shorten_url: shortUrl });
            return result.insertId;
        } catch (e) {
            console.error(e);
            throw e;
        }
    };
};

module.exports = ResultModel;
