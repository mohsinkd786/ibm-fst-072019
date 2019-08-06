const express = require('express');
const server = express();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: 'uploads' ,
    filename: (rq, file, callback) => {
      callback(null, Date.now() + '-'+ file.originalname)
    }
});

const upload = multer({storage: storage});
server.get('/app',(rq,rs)=>{
    rs.sendFile(__dirname +'/app.html');
});
server.post('/upload',upload.single('profile'),(rq,rs,next)=>{
    rs.json({
        message : "Image Uploaded Successfully"
    })
});

server.listen(2011);