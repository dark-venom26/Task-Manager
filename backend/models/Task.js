const mongoose = require("mongoose")
const { Schema } = mongoose

const TaskSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    task: {
        type: String,
        max: 60
    }
},
    { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;