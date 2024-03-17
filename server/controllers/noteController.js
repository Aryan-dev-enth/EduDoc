import NoteModel from "../models/Note.js";

class NoteController {

    static createNote = async (req, res) => {
        try {
            const { title, content, fileUrl } = req.body;
            if (!title || !content || !fileUrl) {
                return res.status(400).json({
                    status: false,
                    message: "All fields are required"
                });
            }

            const newNote = new NoteModel({
                title,
                content,
                fileUrl
            });

            const savedNote = await newNote.save();

            res.status(201).json({
                status: true,
                data: savedNote,
                message: "Note created successfully"
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: error.message
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
                    message: "Note not found"
                });
            }

            res.json({
                status: true,
                data: note,
                message: "Note deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: error.message
            });
        }
    };

    static getAllNotes = async (req, res) => {
        try {
            const notes = await NoteModel.find();

            res.json({
                status: true,
                data: notes,
                message: "Notes retrieved successfully"
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: error.message
            });
        }
    };

}

export default NoteController;
