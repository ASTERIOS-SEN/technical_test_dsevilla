const { FavoritesModel, FavoritesSchema} = require('./favorites.model');

const setupModels = (sequelize) => {
    const Favorites = FavoritesModel.init(FavoritesSchema, FavoritesModel.config(sequelize));
    return {
        Favorites
    }
}

module.exports = setupModels;