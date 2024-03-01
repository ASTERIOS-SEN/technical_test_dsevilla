const { Model, DataTypes} = require('sequelize');
const FAVORITES_TABLE = 'personajes';

class FavoritesModel extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: FAVORITES_TABLE,
            modelName: 'Favorite',
            timestamps: true
        }
    }
}

const FavoritesSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    species: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    type: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    gender: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    url: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false
    }
}

module.exports = { FavoritesModel, FavoritesSchema };