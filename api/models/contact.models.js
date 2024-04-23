import mongoose from "mongoose";

// Define the schema for the data
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    // match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, // Basic email format validation
  },
  contact:{
    type:String,
    required:true
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

// Create a model based on the schema
const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;
