const AlterationShopService = require('../services/alterationShop.service');
const Result = require('../models/result');

const alterationShopContorller = {
    /**
     * 수선집 태그 목록을 조회한다.
     */
    getTagList: async (req, res) => {
        const data = await AlterationShopService.getTagList();
        const result = new Result();
        result.success = true;
        result.data = data;
        res.send(result);
    },
    /**
     * 수선집 목록을 조회한다.
     */
    getAlterationShopList: async (req, res) => {
        const result = new Result();
        result.success = false;
        if(req.isAuthenticated() && req.user) {
            const userId = req.user.userEmail;
            const data = await AlterationShopService.getAlterationShopList(userId);
            result.success = true;
            result.data = data;
        }
        res.send(result);
    },
    /**
     * 수선집 상세정보를 조회한다.
     */
     getAlterationShopDetail: async (req, res) => {
        const alterationShopId = req.query.alterationShopId;
        const data = await AlterationShopService.getAlterationShopDetail(alterationShopId);
        const result = new Result();
        result.success = true;
        result.data = data;
        res.send(result);
    },
    /**
     * 좋아요를 추가 or 삭제한다.
     */
     toggleShopLike: async (req, res) => {
        const result = new Result();
        result.success = false;
        const alterationShopId = req.body.alterationShopId;
        if(req.isAuthenticated() && req.user) {
            const userId = req.user.userEmail;
            const data = await AlterationShopService.toggleShopLike(alterationShopId, userId);
            result.success = true;
            result.data = data;
        }
        res.send(result);
     },
};

module.exports = alterationShopContorller;