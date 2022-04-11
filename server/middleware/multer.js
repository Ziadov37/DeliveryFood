const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const extention = file.originalname.split(".");     
        cb(null,new Date().getTime() + "" + Math.floor(Math.random() * 100) + "." + extention[1] );
        // cb(null, Date.now() + "-" + file.originalname)
    }
})

const upload = multer({
    storage: storage
})

module.exports = upload