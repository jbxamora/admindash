// Import the mongoose library for creating database schemas and models
import mongoose from "mongoose";

// Define the database schema for products
const ProductSchema = new mongoose.Schema(
    {
        // The name of the product
        name: String,
        // The price of the product
        price: Number,
        // A brief description of the product
        description: String,
        // The category that the product belongs to
        category: String,
        // The average rating of the product, as rated by customers
        rating: Number,
        // The amount of product available in stock
        supply: Number,
    },
    // Enable timestamps to automatically track the creation and update time of documents
    { timestamps: true }
);

// Create a mongoose model for the product schema and export it
const Product = mongoose.model("Product", ProductSchema);
export default Product;
