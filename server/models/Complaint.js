const mongoose = require('mongoose')

let complaintSchema = new mongoose.Schema({
    residentId: { type: String, required: true },
    assignedTo: { type: String, required: true},
    status: { type: String, enum: ['Open', 'In Progress', 'Closed'], required: true },
    description: { type: String, required: true },
   
   
});

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;