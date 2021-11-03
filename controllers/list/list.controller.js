const ListService = require('../../services/list/list.service');

exports.getUrlList = async (req, res, next) => {
    try {
        const result = await ListService.readUrls();
        return res.render('urlList' , { urlList: result });
    } catch(e) {
        console.error(e);
        next(e);
    }
};
