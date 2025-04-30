import express from 'express';
import Contact from '../models/contactusModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const contactMessage = new Contact({ name, email, message });
    await contactMessage.save();

    res.status(200).json({ message: 'Your message has been received!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong, please try again later.' });
  }
});

export default router;
