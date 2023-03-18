// Import the mongoose library for creating database schemas and models
import mongoose from "mongoose";

// Define the database schema for affiliate statistics
const AffiliateStatSchema = new mongoose.Schema(
    {
        // The user ID associated with the affiliate statistics
        userId: { type: mongoose.Types.ObjectId, ref: "User" },
        // An array of transaction IDs associated with the user's affiliate sales
        affiliateSales: {
            type: [mongoose.Types.ObjectId],
            ref: "Transaction",
        },
    },
    // Enable timestamps to automatically track the creation and update time of documents
    { timestamps: true }
);

// Create a mongoose model for the affiliate statistics schema and export it
const AffiliateStat = mongoose.model("AffiliateStat", AffiliateStatSchema);
export default AffiliateStat;
