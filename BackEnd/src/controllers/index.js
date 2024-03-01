const FavoritesService = require('../services/favorites.service');
const customResponse = require("../helpers/mapperResponse");
const favoritesService = new FavoritesService();


const getFavorites = async (req, res) => {
    try {
        const response = await favoritesService.getAll();
        res.json(customResponse(response));
    } catch (error) {
        res.json(customResponse(error, 500));
    }
}

const createFavorite = async (req, res) => {
    try {
        const response = await favoritesService.create(req.body);
        res.json(customResponse(response));
    } catch (error) {
        console.log(error)
        res.json(customResponse(error, 500));
    }
}

const deleteFavorite = async (req, res) => {
    try {
        const response = await favoritesService.delete(req.params.id);
        res.json(customResponse(response));
    } catch (error) {
        res.json(customResponse(error, 500));
    }
}

module.exports = {
    getFavorites,
    createFavorite,
    deleteFavorite
}