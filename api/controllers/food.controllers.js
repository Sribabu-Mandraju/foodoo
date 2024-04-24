import Food from "../models/food.models.js";

export const DonateFood = async (req, res) => {
  try {
    const {
      foodname,
      email,
      phonenumber,
      quantity,
      address,
      mealType,
      categoryType,
      district,
    } = req.body;
    console.log(req.body);

    const food = await Food.create({
      foodname,
      email,
      phonenumber,
      quantity,
      address,
      mealType,
      categoryType,
      district,
    });
    console.log(food);

    return res.status(200).json({
      success: true,
      message: "Food added successfully",
      data: food,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const GetALlDonations = async (req, res) => {
  // console.log("get all donations called");
  try {
    const food = await Food.find();
    // console.log("food", food);
    res.status(200).json({
      success: true,
      data: food,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const UpdateDonationByID = async (req, res) => {
  try {
    const { id } = req.params;
    const updateFields = req.body;

    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No fields provided for update",
      });
    }

    const updatedFood = await Food.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    if (!updatedFood) {
      return res.status(404).json({
        success: false,
        message: "Food donation not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Food donation updated successfully",
      data: updatedFood,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const DeleteDonation = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the food donation exists
    const existingFood = await Food.findById(id);
    if (!existingFood) {
      return res.status(404).json({
        success: false,
        message: "Food donation not found",
      });
    }

    // Delete the food donation
    const deletedFood = await Food.findByIdAndDelete(id);

    // Check if the food donation was successfully deleted
    if (!deletedFood) {
      return res.status(404).json({
        success: false,
        message: "Failed to delete food donation",
      });
    }

    // If successfully deleted, return success response
    return res.status(200).json({
      success: true,
      message: "Food donation deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
