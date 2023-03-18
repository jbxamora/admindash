// This function fetches the overall sales statistics from the database
import OverallStat from "../models/OverallStat.js";

export const getSales = async (req, res) => {
    try {
        // Find all overall sales statistics
        const overallStats = await OverallStat.find();
        // Return the first overall sales statistics object as JSON
        res.status(200).json(overallStats[0]);
    } catch (error) {
        // If there's an error, return an error message as JSON with status code 404
        res.status(404).json({ message: error.message });
    }
};
