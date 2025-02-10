import jwt from "jsonwebtoken";

// Admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {
        const { atoken } = req.headers;
        if (!atoken) return res.status(401).json({ success: false, message: "Unauthorized" });

        const decoded = jwt.verify(atoken, process.env.JWT_SECRET);
        if (!decoded) return res.status(401).json({ success: false, message: "Unauthorized" });

        if (decoded.email !== process.env.ADMIN_EMAIL || decoded.password !== process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
};

export default authAdmin;