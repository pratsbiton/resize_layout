const mongoose = require('mongoose');
 
// Define schema
const countSchema = new mongoose.Schema({
  createCount: {
    type: Number,
    default: 0
  },
  updateCount: {
    type: Number,
    default: 0
  }
});
 
// Create model
const Count = mongoose.model('Count', countSchema);
 
module.exports = Count;