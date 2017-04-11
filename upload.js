const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './public'),
    filename: (req, file, cb) => {
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
module.exports = upload;
