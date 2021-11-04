const ListModel = require('../../models/list/list.model');

exports.getUrlList = async (req, res, next) => {
    try {
        const result = await ListMdoel.readUrls();
        return res.render('urlList' , { urlList: result });
    } catch(e) {
        console.error(e);
        next(e);
    }
};
