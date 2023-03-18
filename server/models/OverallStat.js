// Import the mongoose library for creating database schemas and models
import mongoose from "mongoose";

// Define the database schema for overall sales statistics
const OverallStatSchema = new mongoose.Schema(
    {
        // Total number of customers
        totalCustomers: Number,
        // Yearly total sales
        yearlySalesTotal: Number,
        // Yearly total units sold
        yearlyTotalSoldUnits: Number,
        // The year associated with the statistics
        year: Number,
        // Monthly sales data
        monthlyData: [
            {
                // The month associated with the sales data
                month: String,
                // Total sales for the month
                totalSales: Number,
                // Total units sold for the month
                totalUnits: Number,
            },
        ],
        // Daily sales data
        dailyData: [
            {
                // The date associated with the sales data
                date: String,
                // Total sales for the date
                totalSales: Number,
                // Total units sold for the date
                totalUnits: Number,
            },
        ],
        // Sales data organized by category, as a map of category names to sales totals
        salesByCategory: {
            type: Map,
            of: Number,
        },
    },
    // Enable timestamps to automatically track the creation and update time of documents
    { timestamps: true }
);

// Create a mongoose model for the overall sales statistics schema and export it
const OverallStat = mongoose.model("OverallStat", OverallStatSchema);
export default OverallStat;
