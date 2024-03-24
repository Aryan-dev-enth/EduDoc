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
    file_url: {
        type: Object,
        required: true
    },
    file_id: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        required: true,
        default: false
    },
    type: {
        type: String
    },
    subject: {
        type: String,
        default: "NA"
    },
    branch: {
        type: String,
    },
    college: {
        type: String,
    }
});

const NoteModel = mongoose.model("Note", noteSchema);

export default NoteModel;
