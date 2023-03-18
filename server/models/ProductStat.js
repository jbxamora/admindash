// Import the mongoose library for creating database schemas and models
import mongoose from "mongoose";

// Define the database schema for product statistics
const ProductStatSchema = new mongoose.Schema(
    {
        // The ID of the product
        productId: String,
        // The total sales for the product for the entire year
        yearlySalesTotal: Number,
        // The total number of units sold for the product for the entire year
        yearlyTotalSoldUnits: Number,
        // The year that the data is for
        year: Number,
        // Monthly data for the product
        monthlyData: [
            {
                // The name of the month
                month: String,
                // The total sales for the product for the month
                totalSales: Number,
                // The total number of units sold for the product for the month
                totalUnits: Number,
            },
        ],
        // Daily data for the product
        dailyData: [
            {
                // The date
                date: String,
                // The total sales for the product for the day
                totalSales: Number,
                // The total number of units sold for the product for the day
                totalUnits: Number,
            },
        ],
    },
    // Enable timestamps to automatically track the creation and update time of documents
    { timestamps: true }
);

// Create a mongoose model for the product statistics schema and export it
const ProductStat = mongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;
