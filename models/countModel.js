const mongoose = require('mongoose');
 
//schema
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
 
//model
const Count = mongoose.model('Count', countSchema);
 
module.exports = Count;