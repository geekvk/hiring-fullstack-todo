const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'Title is required'],
        trim : true,
        maxLength : [50, 'Title cannot be exceed 50 characters']
    },
    description : {
        type : String
    },
    isDone : {
        type : Boolean,
        default : false
    },
    createdAt : { type: Date, default: Date.now() },
    updatedAt : { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Todo', todoSchema);

