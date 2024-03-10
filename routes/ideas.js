const express = require('express');
const router = express.Router();
const Idea = require('../models/Idea');

const ideas = [
  {
    id: 1,
    text: 'Positive NewsLetter, a newsletter that only shares positive, uplifting news',
    tag: 'Technology',
    username: 'TonyStark',
    date: '2022-01-02',
  },
  {
    id: 2,
    text: 'Milk cartons that turn a different color the older that your milk is getting',
    tag: 'Inventions',
    username: 'SteveRogers',
    date: '2022-01-02',
  },
  {
    id: 3,
    text: 'ATM location app which lets you know where the closest ATM is and if it is in service',
    tag: 'Software',
    username: 'BruceBanner',
    date: '2022-01-02',
  },
];
  
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
      res.json({ succes: true, data: updateIdea });
  } catch (error) {
    console.log(error);
    res.json({ succes: false, error: 'Something Went Wrong' });
  }
});

// delete an idea
router.delete('/:id', async (req, res) => {
  try {
    await Idea.findByIdAndDelete(req.params.id);
    res.json({ succes: true, data: {} });
  } catch (error) {
    console.log(error);
    res.json({ succes: false, error: 'Something Went Wrong' });
  }
});

module.exports = router;
