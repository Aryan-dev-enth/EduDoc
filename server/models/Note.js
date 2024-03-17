import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    file: {
        type: String,
        required: true,
        trim: true
    }
});

const NoteModel = mongoose.model("Note", noteSchema);

export default NoteModel;
