import { Contact } from "../models/contact.js";

export const submitform = async (req, res) => {
  try {
    const { name, email, number, message } = req.body;

    // Check if email already exists
    const existingEmail = await Contact.findOne({ email });
    if (existingEmail) {
      return res
        .status(400)
        .json({ message: "Email already exists.", success: false });
    }

    // Check if mobile number already exists
    const existingNumber = await Contact.findOne({ number });
    if (existingNumber) {
      return res
        .status(400)
        .json({ message: "Mobile number already exists.", success: false });
    }

    // Create a new contact and save to DB
    let newContact = new Contact({ name, email, number, message });
    await newContact.save();

    return res
      .status(201)
      .json({ message: "Message Sent Successfully", success: true });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server Error", success: false });
  }
};
