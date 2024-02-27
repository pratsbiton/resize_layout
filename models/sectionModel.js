const mongoose = require("mongoose");
 
//schema
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
 
//model
const Section = mongoose.model('Section', sectionSchema);
 
module.exports = Section;