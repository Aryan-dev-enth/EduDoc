import { google } from 'googleapis';
import fs from 'fs';

const CLIENT_ID = '77935883416-ea6c1p97s561dbgos15pgonglk1nobdb.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04-rhPgWVS-kMCgYIARAAGAQSNwF-L9IrZFiBzoSGYPQVuOiDRm1knTOZs5XoYXEnKfGAsyMwbX2o3JTnNHMZrWkotejAjXA-sKI';

const oauth2client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2client.setCredentials({ refresh_token: REFRESH_TOKEN });

const uploadToGoogleDrive = async (filePath) => {
    try {
        const drive = google.drive({ version: 'v3', auth: oauth2client });

        const uniqueFileName = `file_${Date.now()}_${Math.floor(Math.random() * 100000)}.pdf`;

        const requestBody = {
            name: uniqueFileName,
            fields: 'id',
        };

        const media = {
            mimeType: 'application/pdf',
            body: fs.createReadStream(filePath),
        };

        const file = await drive.files.create({
            requestBody,
            media,
        });

        console.log('File Id:', file.data.id);
        return file.data.id;
    } catch (err) {
        console.error('Error uploading file to Google Drive:', err);
        throw err;
    }
};

const deleteFromGoogleDrive = async (fileId) => {
    try {
        const drive = google.drive({ version: 'v3', auth: oauth2client });

        const response = await drive.files.delete({
            fileId: fileId
        });

        console.log('File deleted successfully');
        return response.data;
    } catch (err) {
        console.error('Error deleting file from Google Drive:', err);
        throw err;
    }
};

const generatePublicURL = async (fileId) => {
    try {
        const drive = google.drive({ version: 'v3', auth: oauth2client });

        await drive.permissions.create({
            fileId: fileId,
            requestBody: {
                role: 'reader',
                type: 'anyone'
            }
        });

        const result = await drive.files.get({
            fileId: fileId,
            fields: 'webViewLink, webContentLink'
        });

        console.log('Public URL generated successfully:', result.data);
        return result.data;
    } catch (err) {
        console.error('Error generating public URL:', err);
        throw err;
    }
};

export { uploadToGoogleDrive, deleteFromGoogleDrive, generatePublicURL };
