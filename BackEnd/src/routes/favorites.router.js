const {Router} = require('express');
const router = Router();

// Importamos las funciones desde el controlador
const {getFavorites, createFavorite, deleteFavorite} = require("../controllers");

router.get('/', getFavorites);
router.post('/', createFavorite);
router.delete('/:id', deleteFavorite);

module.exports = router;