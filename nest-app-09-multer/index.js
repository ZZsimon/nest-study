const express = require('express')
const multer = require('multer')
const cors = require('cors');

const app = express()
app.use(cors()); // 本机不会有跨域问题，但是前端和后端部署在不同域名时，就会发生跨域问题

// app.get('/aaa', (req, res, next) => {
//     //   console.log('req.file', req.file);
//     //   console.log('req.body', req.body);
//     res.send({ a: 1 });
// })

const upload = multer({ dest: 'uploads/' })

app.post('/aaa', upload.single('file'), function (req, res, next) {
    console.log('req.file', req.file);
    console.log('req.body', req.body);
})

app.listen(3333);
