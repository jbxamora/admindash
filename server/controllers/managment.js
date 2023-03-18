// This function fetches all admins from the database
export const getAdmins = async (req, res) => {
    try {
        // Find all users with role "admin" and exclude the password field
        const admins = await User.find({ role: "admin" }).select("-password");
        // Return the admins as JSON
        res.status(200).json(admins);
    } catch (error) {
        // If there's an error, return an error message as JSON with status code 404
        res.status(404).json({ message: error.message });
    }
};

// This function fetches user performance data from the database
export const getUserPerformance = async (req, res) => {
    try {
        // Extract the user ID from the request parameters
        const { id } = req.params;

        // Use the aggregation pipeline to join user and affiliate stats data
        const userWithStats = await User.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(id) } },
            {
                $lookup: {
                    from: "affiliatestats",
                    localField: "_id",
                    foreignField: "userId",
                    as: "affiliateStats",
                },
            },
            { $unwind: "$affiliateStats" },
        ]);

        // Fetch all transactions related to the user's affiliate sales
        const saleTransactions = await Promise.all(
            userWithStats[0].affiliateStats.affiliateSales.map((id) => {
                return Transaction.findById(id);
            })
        );

        // Remove any null transactions from the result
        const filteredSaleTransactions = saleTransactions.filter(
            (transaction) => transaction !== null
        );

        // Return the user's performance data and filtered sale transactions as JSON
        res
            .status(200)
            .json({ user: userWithStats[0], sales: filteredSaleTransactions });
    } catch (error) {
        // If there's an error, return an error message as JSON with status code 404
        res.status(404).json({ message: error.message });
    }
};
