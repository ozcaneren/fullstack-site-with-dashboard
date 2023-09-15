const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');

const app = express();


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB bağlantı hatası!: '));
db.once('open', function () {
  console.log('Veritabanı başarıyla bağlandı');
});

// Static Files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));


const MarkCtrl = require('../controllers/mark-ctrl')

const router = express.Router()

router.post('/marks', MarkCtrl.createMark)
router.put('/marks/:id', MarkCtrl.updateMark)
router.delete('/marks/:id', MarkCtrl.deleteMark)
router.get('/marks/:id', MarkCtrl.getMarkById)
router.get('/marks', MarkCtrl.getMarks)

module.exports = router