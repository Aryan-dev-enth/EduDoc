import Notes from "../models/Notes.js";

class NotesController {
  static async createNote(req, res) {
    try {
      const { user_id, title, content, tags, attachments } = req.body;

      if (!user_id || !title || !content) {
        return res.status(400).json({
          status: false,
          message: "User ID, title, and content are required fields",
        });
      }

      const existingNote = await Notes.findOne({ title, content, tags });

      if (existingNote) {
        return res.status(400).json({
          status: false,
          message: "Note with the same title, content, and tags already exists",
        });
      }

      const newNote = new Notes({
        user_id,
        title,
        content,
        tags,
        attachments,
      });

      await newNote.save();

      res.status(201).json({
        status: true,
        message: "Note created successfully",
        note: newNote,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }
  

  static async getNotes(req, res) {
    try {
      const verifiedNotes = await Notes.find({ verified: true });

      res.status(200).json({ status: true, notes: verifiedNotes });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
  }

  static async getNoteById(req, res) {
    try {
      const noteId = req.params.id;
      const note = await Notes.findById(noteId);

      if (!note) {
        return res.status(404).json({ status: false, message: 'Note not found' });
      }

      res.status(200).json({ status: true, note });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
  }

  static async updateNoteById(req, res) {
    try {
      const noteId = req.params.id;
      const { title, content, tags, attachments } = req.body;

      const updatedNote = await Notes.findByIdAndUpdate(
        noteId,
        { title, content, tags, attachments, updated_at: new Date() },
        { new: true }
      );

      if (!updatedNote) {
        return res.status(404).json({ status: false, message: 'Note not found' });
      }

      res.status(200).json({ status: true, note: updatedNote });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
  }

  static async deleteNoteById(req, res) {
    try {
      const noteId = req.params.id;

      const deletedNote = await Notes.findByIdAndDelete(noteId);

      if (!deletedNote) {
        return res.status(404).json({ status: false, message: 'Note not found' });
      }

      res.status(200).json({ status: true, message: 'Note deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
  }

  static async getAllNotesForAdmin(req, res) {
    try {
      const allNotes = await Notes.find();
      res.status(200).json({ status: true, notes: allNotes });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
  }

  static async updateNoteForAdmin(req, res) {
    try {
      const noteId = req.params.id;
      const { title, content, tags, attachments, verified } = req.body;

      const updatedNote = await Notes.findByIdAndUpdate(
        noteId,
        { title, content, tags, attachments, verified, updated_at: new Date() },
        { new: true }
      );

      if (!updatedNote) {
        return res.status(404).json({ status: false, message: 'Note not found' });
      }

      res.status(200).json({ status: true, note: updatedNote });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
  }

  static async deleteNoteForAdmin(req, res) {
    try {
      const noteId = req.params.id;

      const deletedNote = await Notes.findByIdAndDelete(noteId);

      if (!deletedNote) {
        return res.status(404).json({ status: false, message: 'Note not found' });
      }

      res.status(200).json({ status: true, message: 'Note deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
  }
}

export default NotesController;
