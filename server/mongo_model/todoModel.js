const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    completed : {
        type : Boolean,
        default : false
    }
})

const todo = mongoose.model("todo",todoSchema);

module.exports = todo;