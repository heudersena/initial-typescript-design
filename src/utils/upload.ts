import multer from 'multer';
import path from 'path';
import { v4 } from "uuid";

function getExtension(path) {
  var r = /\.([^./]+)$/.exec(path);
  return r && r[1] || '';
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '..', '..', 'public', 'tmp'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = v4()

    cb(null, uniqueSuffix+'.'+getExtension(file.originalname).toLowerCase());
  },
});

const upload = multer({ storage: storage });

export { upload };
