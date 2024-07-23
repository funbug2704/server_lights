const User = require("../models/User");
const Image = require("../models/Image");

module.exports = {
    Upload: async (req, res) => {
        try {
            if (req.file) {
                const userId = req.body.userId;
                const userExists = await User.findById(userId);

                if (!userExists) {
                    throw "User not found"; 
                }
                
                const publicUrl = req.file.path;

                const newImage = new Image({ userId: userId, ImageUrl: publicUrl });
                await newImage.save();

                res.status(200).json({ status: true, url: publicUrl });
            } else {
                throw "error image";
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, error });
        }
    },
    getImage: async (req, res) => {
        // Implement getImage function as needed
    }
};
