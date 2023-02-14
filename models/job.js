//company name, the position, the status, createdBy 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const jobSchema = new Schema({
    company: {
        type: String,
        required:[true, 'Please enter company name']
    },
    position: {
        type: String,
        required:[true, 'Please provide position']
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'please provide a user']
    }, 
    status:{
        type: String,
        enum: ['Interview', 'Applied', 'Declined'],
        default: 'Applied',
    }
}, {timestamps: true});

module.exports = mongoose.model('Job', jobSchema)