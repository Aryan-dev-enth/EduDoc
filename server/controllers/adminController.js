import Notes from '../models/Notes.js';

class AdminController {
  static async assignAdminRole(req, res) {
    try {
      const userId = req.params.userId;
      
      const updatedUser = await User.findByIdAndUpdate(userId, { role: 'admin' }, { new: true });

      if (!updatedUser) {
        return res.status(404).json({ status: false, message: 'User not found' });
      }

      res.status(200).json({ status: true, user: updatedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
  }

  static async approveNote(req, res) {
    try {
      const noteId = req.params.noteId;

      const updatedNote = await Notes.findByIdAndUpdate(noteId, { status: 'approved', verified: true }, { new: true });

      if (!updatedNote) {
        return res.status(404).json({ status: false, message: 'Note not found' });
      }

      res.status(200).json({ status: true, note: updatedNote });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
  }

  static async rejectNote(req, res) {
    try {
      const noteId = req.params.noteId;

      const updatedNote = await Notes.findByIdAndUpdate(noteId, { status: 'rejected', verified: false }, { new: true });

      if (!updatedNote) {
        return res.status(404).json({ status: false, message: 'Note not found' });
      }

      res.status(200).json({ status: true, note: updatedNote });
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
}

export default AdminController;
