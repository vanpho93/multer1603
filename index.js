const express = require('express');
const upload = require('./upload');

const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(3000, () => console.log('Server started'));

// const avatarUpload = upload.single('avatar');
const arrayUpload = upload.array('avatar');

app.use('/trangA', require('./trangA'));

app.get('/', (req, res) => res.render('home'));

// app.post('/upload', (req, res) => {
//     avatarUpload(req, res, err => {
//         if (err) return res.send(`LOI: ${err}`);
//         res.send(`UPLOAD THANH CONG: ${req.file.filename}`);
//     });
// });

app.post('/upload', (req, res) => {
    arrayUpload(req, res, err => {
        if (err) return res.send(`LOI: ${err}`);
        res.send(req.files);
    });
});

//localhost:3000/tinh/cong/3/4

//localhost:3000/trangA/
//localhost:3000/trangB/