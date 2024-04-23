import Contact from '../models/contact.models.js';

export const PostContact = async (req, res) => {
    try {
        const { name, email,contact, subject, message } = req.body;

        console.log(req.body)

        const newContact = await Contact.create({
            name,
            email,
            contact,
            subject,
            message
        });

        console.log(newContact)

        return res.status(200).json({
            success: true,
            message: "Contact message submitted successfully",
            data: newContact
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};


export const GetALlContacts = async (req, res) => {
    try {
      const contacts = await Contact.find();
      res.status(200).json({
        success: true,
        data: contacts,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }


  export const DeleteContact =  async (req, res) => {
    try {
      const { id } = req.params;
  
      const existingContact = await Contact.findById(id);
      if (!existingContact) {
        return res.status(404).json({
          success: false,
          message: "Contact not found",
        });
      }
  
      const deletedContact = await Contact.findByIdAndDelete(id);
  
      if (!deletedContact) {
        return res.status(404).json({
          success: false,
          message: "Failed to delete food donation",
        });
      }
  
      // If successfully deleted, return success response
      return res.status(200).json({
        success: true,
        message: "Contact deleted successfully",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }