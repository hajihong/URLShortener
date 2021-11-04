const ResultModel = require('../../models/result/result.model');
const ListModel = require('../../models/list/list.model');
const Base62 = require('../../modules/Base62');


// url 단축 
exports.postShortUrl = async (req, res, next) => {
    try {
        const originUrl = req.body.originUrl;
        const result = await ResultModel.readUrl(originUrl);

        if(result.length > 0) {
            return res.render("index", { 
                url : result[0].shorten_url,
                message: 'SUCCESS!' });
        } else {
            const num = await ResultModel.postOriginUrl(originUrl);
            const shortUrl = await Base62.encodeToBase62(num);
            if (shortUrl.toString().length > 8 ) {
                return res.render("index", {
                    url: null,
                    message: "Length of Short Url is over 8"
                });
            } 
            await ResultModel.postShortUrl(num, shortUrl);
            return res.render("index", { 
                url : shortUrl,
                message: 'SUCCESS' 
            });
        }
    } catch (e) {
        return res.render("index", {
            url: null,
            message: "URL is Not Valid"
        });
    }
};

// 단축된 url를 통해 원본 페이지로 이동
exports.redirectUrl = async (req, res) => {
    try {
        if(req.params.shortUrl == 'list') {
            const urlList = await ListModel.readUrls();
            return res.render("urlList", { urlList : urlList });
        }
        const result = await ResultModel.readOriginUrl(req.params.shortUrl);
        if (result === null) return res.render("error");
        return res.redirect(result[0].origin_url);
    } catch (e) {
        console.error(e);
        next(e);
    }
};
