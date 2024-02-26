const express = require('express');
const Section = require('./models/sectionModel'); 
const Count = require('./models/countModel'); 
 
const router = express.Router();
 
// Create a new section
router.post('/', async (req, res) => {
  try {
    const { text, section } = req.body;
    const newSection = new Section({ text, section });
    await newSection.save();
 
    // Increment createCount in Count model
    await Count.findOneAndUpdate({}, { $inc: { createCount: 1 } }, { upsert: true });
 
    res.status(201).json(newSection);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a section
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { text, section } = req.body;
    
    const updatedSection = await Section.findByIdAndUpdate(id, { text, section }, { new: true });
    
    if (!updatedSection) {
      return res.status(404).json({ error: 'Section not found' });
    }
 
    // Increment updateCount in Count model
    await Count.findOneAndUpdate({}, { $inc: { updateCount: 1 } }, { upsert: true });
 
    res.status(200).json(updatedSection);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete all sections
router.delete('/', async (req, res) => {
  try {
    const {section} = req.body;
    await Section.deleteMany({section});
    res.status(200).json({message:"succesfully deleted"});
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all sections
router.get('/', async (req, res) => {
  try {
    const sections = await Section.find({});
    res.status(200).json(sections);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get total count of create and update APIs
router.get('/count', async (req, res) => {
  try {
    const counts = await Count.findOne({});
    if (!counts) {
      return res.status(404).json({ error: 'Counts not found' });
    }
    const totalCount = counts.createCount + counts.updateCount;
    res.status(200).json({ totalCount });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});
 
module.exports = router;