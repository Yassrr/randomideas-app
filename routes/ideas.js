const express = require('express');
const router = express.Router();
const Idea = require('../models/Idea');

  
// GET All facutre
router.get('/', async (req, res) => {
  try {
    // use find on the model
    const ideas = await Idea.find();
    res.json({ succes: true, data: ideas});
  } catch (error) {
    res.status(500).json({ succes: false, error: 'Something Went Wrror'});
  }
});

// GET single idea 
router.get('/:id', async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    res.json({ succes: true, data: idea});
  } catch (error) {
    console.log(error);
    res.status(500).json({ succes: false, error: 'Something Went Wrong' });
  }
});


// add an idea
router.post('/', async (req, res) => {
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username
  });
  try {
    // save use it on Idea Object
    const savedIdea = await idea.save();
    res.json({ succes: true, data: savedIdea});
  } catch (error) {
    console.log(error);
    res.status(500).json({ succes: false, error: 'Something Went Wrong' });
  }
  res.json({ success: true, data: idea });
});


// update an idea
router.put('/:id', async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    
    if (idea.username === req.body.username) {
      const updateIdea = await Idea.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            text: req.body.text,
            tag: req.body.tag
          }
        },
        { new: true }
      );
        return res.json({ succes: true, data: updateIdea });
    }

    // Username do not match
    res.status(403).json({ succes: false, error: 'You are not authorized to update this resource'});

  } catch (error) {
    console.log(error);
    res.json({ succes: false, error: 'Something Went Wrong' });
  }
});


// delete an idea
router.delete('/:id', async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);

    // Match the username
    if (idea.username === req.body.username) {
      await Idea.findByIdAndDelete(req.params.id);
      return res.json({ succes: true, data: {} });
    
    }

    // Username do not match
    res.status(403).json({ succes: false, error: 'You are not authorized to delete this resource'});

  } catch (error) {
    console.log(error);
    res.status(500).json({ succes: false, error: 'Something Went Wrong' });
  }
});

module.exports = router;
