const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './public'),
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage });

const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(3000, () => console.log('Server started'));

app.get('/', (req, res) => res.render('home')); 
app.post('/upload', upload.single('avatar'), (req, res) => res.send('THANH_CONG'));

