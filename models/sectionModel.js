const mongoose = require("mongoose");
 
// Define schema
const sectionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
});
 
// Create model
const Section = mongoose.model('Section', sectionSchema);
 
module.exports = Section;