const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './public'),
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, `${Date.now()}${file.originalname}`);
    }
});

function fileFilter(req, file, cb) {
    if (file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
        console.log('SAI DINH DANG FILE');
    }
}

const limits = { fileSize: 100 * 1024 };

const upload = multer({ storage, fileFilter, limits });

const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(3000, () => console.log('Server started'));

const avatarUpload = upload.single('avatar');

app.get('/', (req, res) => res.render('home')); 
app.post('/upload', (req, res) => {
    avatarUpload(req, res, err => {
        if (err) return res.send(`LOI: ${err}`);
        res.send('UPLOAD THANH CONG');
    });
});

