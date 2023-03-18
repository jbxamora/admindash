import mongoose from "mongoose";

// Define the schema for a transaction document
const TransactionSchema = new mongoose.Schema(
    {
        userId: String, // User ID of the transaction
        cost: String, // Total cost of the transaction
        products: {
            type: [mongoose.Types.ObjectId], // Array of product IDs in the transaction
            of: Number, // Quantity of each product in the transaction
        },
    },
    { timestamps: true } // Include createdAt and updatedAt timestamps
);

// Create a Transaction model from the schema
const Transaction = mongoose.model("Transaction", TransactionSchema);

// Export the Transaction model for use in other files
export default Transaction;
