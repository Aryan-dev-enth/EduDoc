const express = require('express');
const router = express.Router();
const Files = require('../models/File');
const dotenv = require('dotenv').config();
const multer = require('multer');


//google drive api connection and auth

const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');
CLIENT_ID = '77935883416-ea6c1p97s561dbgos15pgonglk1nobdb.apps.googleusercontent.com';
CLIENT_SECRET = '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';
REDIRECT_URI = 'https://developers.google.com/oauthplayground';
REFRESH_TOKEN = '1//04-rhPgWVS-kMCgYIARAAGAQSNwF-L9IrZFiBzoSGYPQVuOiDRm1knTOZs5XoYXEnKfGAsyMwbX2o3JTnNHMZrWkotejAjXA-sKI';


const oauth2client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: 'v3',
  auth: oauth2client
})

//multer routes for file uplading
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'backend/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF files are allowed'), false);
  }
}


const upload = multer({ storage: storage, fileFilter: fileFilter });



router.post('/uploadFiles', upload.single('file'), async (req, res) => {

  const filePath = req.file.path;
  const { category, semester, tag, title } = req.body;
  pathToFile = path.join('C:/Users/aryan/OneDrive/Desktop/Notes_', filePath);
  console.log(pathToFile);

  try {
    const response = await drive.files.create({
      requestBody: {
        name: title + "_" + category + "_" + semester + "_" + tag + ".pdf",
        mimeType: "application/pdf"
      },
      media: {
        mimeType: "application/pdf",
        body: fs.createReadStream(pathToFile)
      }
    })

    console.log(response.data);

    const files = new Files(response.data);

    await files.save();
    res.json({
      message: "Hi"
    })
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/getFiles', async (req, res) => {
  try {
    const response = await drive.files.list({
      q: "'root' in parents", // You can specify a different parent folder if needed
      fields: 'files(id, name, mimeType)',
    });

    const files = response.data.files;
    res.json({ files });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching files' });
  }
});

router.delete("/deleteFile/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const response = await drive.files.delete({
      fileId: id
    });
    res.json(response.data);
  }
  catch (error) {
    res.status(404).send(error.message);
  }
})

router.get("/downloadFile/:id", async (req, res) => {
  try {
    const fileId = req.params.id;
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone'
      }

    })
    const result = await drive.files.get({
      fileId,
      fields: 'webViewLink, webContentLink'
    });
    res.json(result);
  } catch (error) {
    res.json(error);
  }
})



module.exports = router;