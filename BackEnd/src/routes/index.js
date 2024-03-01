const express = require('express');
const favoritesRouter = require('./favorites.router');

const router = (app) => {
    const apiRouter = express.Router();
    app.use('/api', apiRouter);
    apiRouter.use('/favorites', favoritesRouter);
}

module.exports = router;