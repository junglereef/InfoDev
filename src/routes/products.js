const express = require("express");
const router = express.Router();
const ProductController = require("../controller/ProductController");var async = require('async');
// const fs = require('fs');
// const path = require('path');
// const multer = require('multer');
// const crypto = require('crypto');
// const storage = multer.diskStorage({
// 	destination: './public/images/uploads/', /* upload path */
// 	filename: function (req, file, cb) {
// 		/* Format: random hex using crypto + image extension */
// 		crypto.pseudoRandomBytes(16, function (err, raw){
// 			cb(null, raw.toString('hex') + path.extname(file.originalname));
// 		});
// 	}
// });
// const upload_image = multer({ 
// 	storage: storage,
// 	fileFilter: function (req, file, cb) {
// 		const allowed_extensions = ['.jpg', '.png', '.gif', '.bmp', '.jpeg'];
// 		const file_extension = path.extname(file.originalname);
// 		/* Check if file extension is valid */
// 		if(allowed_extensions.indexOf(file_extension) == -1){
// 			console.log(file.originalname + ' is not a valid file type');
// 			/* Do not upload if file is not an image */
// 			return cb(null, false);
// 		}
// 		cb(null, true)
// 	}
// });

// DEFININDO ROTAS PRINCIPAIS DE PRODUTO [VIEWS]
router.get("/", ProductController.productsListPage);
router.get("/categorias", ProductController.categoriesProductPage);
router.get("/:id", ProductController.productPage);

//Exportando Rotas
module.exports = router;
