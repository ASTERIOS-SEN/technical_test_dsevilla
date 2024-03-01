const {models} = require('../libs/sequelize');

class FavoritesService {
    constructor() {
    }

    //Traer todos los personajes favoritos
    async getAll() {
        const res = await models.Favorite.findAll({
            attributes:
                ['id', 'name', 'status', 'species', 'type', 'gender', 'image', 'url', 'created']
        });
        return res;
    }

    //Crear un personaje favorito
    async create(data) {
        const verificarLimite = await this.checkLimitRegister();
        if (verificarLimite) {
            const res = await models.Favorite.create(data);
            return res;
        } else {
            throw new Error('Se ha alcanzado el límite de registros.');
        }
    }

    //Buscar un personaje favorito por id
    async findOne(id) {
        const res = await models.Favorite.findByPk(id);
        return res;
    }

    //Eliminar un personaje favorito
    async delete(id) {
        const model = await this.findOne(id);
        await model.destroy();
        return {deleted: true};
    }

    // Función para verificar el límite de registros
    async checkLimitRegister() {
        const limite = 10;
        const numeroRegistros = await models.Favorite.count();
        return numeroRegistros < limite;
    }
}

module.exports = FavoritesService;