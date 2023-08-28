import mongoose from "mongoose";

const memberSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    major: {
        type: String
    },
    pronouns: {
        type: String
    },
    grade: {
        type: String,
    },
    fam: {
        type: String,
    },
    events: {
        type: Array,
        "default": [],
    }
})

const Member = mongoose.model("Member", memberSchema);

export default Member