import mongoose from "mongoose";

// Define the structure of your User document using Mongoose's Schema class
const UserSchema = new mongoose.Schema(
    {
        // Name field with string type, required, and length between 2 and 100 characters
        name: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        // Email field with string type, required, unique, and maximum length of 50 characters
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        // Password field with string type and minimum length of 5 characters
        password: {
            type: String,
            required: true,
            min: 5,
        },
        // Additional optional fields for the user's location, occupation, phone number, and role
        city: String,
        state: String,
        country: String,
        occupation: String,
        phoneNumber: String,
        // An array to store the user's transactions
        transactions: Array,
        // Role field with string type and a default value of "admin"
        role: {
            type: String,
            enum: ["user", "admin", "superadmin"], // The allowed values for the role field
            default: "admin",
        },
    },
    // Options for the schema, such as timestamps to automatically record creation and update times
    { timestamps: true }
);

// Create a Mongoose model from the UserSchema and export it
const User = mongoose.model("User", UserSchema);
export default User;
