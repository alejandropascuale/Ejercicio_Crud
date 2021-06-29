const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		const visitedProducts = products.filter (p => p.category == 'visited');
		const insaleProducts = products.filter (p => p.category == 'in-sale');
		const viewData = {
			visiteds: visitedProducts,
			inSale: insaleProducts
		}
		res.render ('index', viewData);
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
