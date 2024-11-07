import mongoose from "mongoose";
import Joi from "joi";
const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required."],
    },
    address: {
      type: String,
      required: [true, "address is required."],
    },
    email: {
      type: String,
      required: [true, "email is required."],
    },
    phone: {
      type: Number,
      required: [true, "phone number is required."],
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
const Contact = new mongoose.model("Contact", ContactSchema);

const ValidateContact = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    address: Joi.string().min(4).max(100).required(),
    email: Joi.string().email().required(),
    phone: Joi.number().min(10).max(10).required(),
  });
  return schema.validate(data);
};

export { Contact, ValidateContact };
