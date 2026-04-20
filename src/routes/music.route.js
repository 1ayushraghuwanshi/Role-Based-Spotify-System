const express = require('express');
// const router = express.Router();
const musicController = require("../controllers/music.controller")
const multer = require("multer");
const authMiddlewar = require("../middlewares/auth.middleware");

const upload = multer({
    storage: multer.memoryStorage()
})

const router = express.Router();

router.post("/upload",authMiddlewar.authArtist, upload.single("music"), musicController.createMusic)
router.post("/album", authMiddlewar.authArtist, musicController.createAlbum)

router.get('/',authMiddlewar.authUser, musicController.getAllMusics)
router.get('/albums',authMiddlewar.authUser, musicController.getAllAlbums)
router.get("/albums/:albumId",authMiddlewar.authUser, musicController.getAlbumById )

module.exports= router;