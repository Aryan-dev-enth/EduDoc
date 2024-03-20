import NoteModel from "../models/Note.js";
import fs from 'fs'
import {
  uploadToGoogleDrive,
  generatePublicURL,
  deleteFromGoogleDrive,
} from "../utils/cloudinary.js";

class NoteController {
  static createNote = async (req, res) => {
    try {
      const { title, content } = req.body;
      const fileUrl = req.file.path; 

      if (!title || !content || !fileUrl) {
        return res.status(400).json({
          status: false,
          message: "All fields are required",
        });
      }

      const googleDriveResponse = await uploadToGoogleDrive(fileUrl); // Add this line

      if (!googleDriveResponse) {
        return res.status(500).json({
          status: false,
          message: "Failed to upload file to Google Drive",
        });
      }

      console.log(googleDriveResponse);

      const newNote = new NoteModel({
        title,
        content,
        file_url:await generatePublicURL(googleDriveResponse),
      });

      // Save the note to the database
      try {
        const savedNote = await newNote.save();

        fs.unlinkSync(fileUrl);

        res.status(201).json({
          status: true,
          data: savedNote,
          message: "Note created successfully",
        });
      } catch (error) {
        return res.status(500).json({
          status: false,
          message: "Failed to save note to database",
          error: error.message,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message,
      });
    }
  };

  static deleteNote = async (req, res) => {
    try {
      const noteId = req.params.id;

      const note = await NoteModel.findByIdAndDelete(noteId);

      if (!note) {
        return res.status(404).json({
          status: false,
          message: "Note not found",
        });
      }

      res.json({
        status: true,
        data: note,
        message: "Note deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message,
      });
    }
  };

  static getAllNotes = async (req, res) => {
    try {
      const notes = await NoteModel.find();

      res.json({
        status: true,
        data: notes,
        message: "Notes retrieved successfully",
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message,
      });
    }
  };
}

export default NoteController;
