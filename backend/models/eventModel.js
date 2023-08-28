import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    numParticipants: {
        type: Number,
        required: true
    },
    spreadsheetID: {
        type: String,
        required: true,
    }
})

const Event = mongoose.model("Event", eventSchema);

export default Event