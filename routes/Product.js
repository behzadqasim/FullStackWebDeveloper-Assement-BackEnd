const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/user');

router.get('/getAllProduct', (req, res, next) => {
    Product.find()
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => next(err));
});
