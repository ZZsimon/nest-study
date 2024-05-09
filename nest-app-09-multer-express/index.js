const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors()); // 本机不会有跨域问题，但是前端和后端部署在不同域名时，就会发生跨域问题

// app.get('/aaa', (req, res, next) => {
//     //   console.log('req.file', req.file);
//     //   console.log('req.body', req.body);
//     res.send({ a: 1 });
// })

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    try {
      fs.mkdirSync(path.join(process.cwd(), "my-uploads"));
    } catch (e) {}
    cb(null, path.join(process.cwd(), "my-uploads"));
  },
  filename: function (req, file, cb) {
    console.log(file, "file");

    const uniqueSuffix = Date.now() + "_" + file.originalname;
    cb(null, file.fieldname + "_" + uniqueSuffix);
  },
});

const upload = multer({ storage });

app.post(
  "/aaa",
  upload.single("file"),
  function (req, res, next) {
    console.log("req.file", req.file);
    console.log("req.body", req.body);
    res.send({ a: 1 });
  },
  (err, req, res, next) => {
    console.log(err, "err33");
  }
);

app.post(
  "/bbb",
  upload.array("files", 2),
  function (req, res, next) {
    console.log("req.file", req.files);
    console.log("req.body", req.body);
  },
  (err, req, res, next) => {
    if (
      err instanceof multer.MulterError &&
      err.code === "LIMIT_UNEXPECTED_FILE"
    ) {
      res.status(400).send({ success: false, msg: "文件数量超出限制" });
    }
  }
);

app.post(
  "/ccc",
  upload.fields([
    { name: "files1", maxCount: 1 },
    { name: "files2", maxCount: 2 },
  ]),
  function (req, res, next) {
    console.log("req.files", req.files);
    console.log("req.file1", req.files["files1"]);
    console.log("req.file2", req.files["files2"]);
    console.log("req.body", req.body);
  },
  (err, req, res, next) => {
    console.log(err, "err33");
    if (
      err instanceof multer.MulterError &&
      err.code === "LIMIT_UNEXPECTED_FILE"
    ) {
      res.status(400).send({ success: false, msg: "文件数量超出限制" });
    }
  }
);

app.listen(3333);
