import jwt from 'jsonwebtoken'
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'


export const authenticate = async (req, res, next) => {
     const authToken = req.headers.authorization;
 
     if (!authToken || !authToken.startsWith("Bearer")) {
         return res
             .status(401)
             .json({ success: false, message: "No token, authorization denied" });
     }
 
     try {
         const token = authToken.split(" ")[1];
         const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
 
         console.log("Decoded token:", decoded); // Log decoded token
 
         // Check if the decoded token contains the user ID
         if (!decoded.id) {
             return res
                 .status(401)
                 .json({ success: false, message: "Invalid token structure" });
         }
 
         req.userId = decoded.id; // Assuming the token contains the user ID in `decoded.id`
         console.log("Set userId to req:", req.userId); // Log userId set to req
 
         next();
     } catch (err) {
         if (err.name === "TokenExpiredError") {
             return res.status(401).json({ message: "Token is expired" });
         }
         return res.status(401).json({ success: false, message: "Invalid token" });
     }
 };




 export const restrict = roles => async (req, res, next) => {
     const userId = req.userId;
     let user = null;
 
     console.log("User ID:", userId); // Log user ID
 
     try {
         const patient = await User.findById(userId);
         const doctor = await Doctor.findById(userId);
 
         if (patient) {
             console.log("Patient found:", patient); // Log patient found
             user = patient;
         } else if (doctor) {
             console.log("Doctor found:", doctor); // Log doctor found
             user = doctor;
         }
 
         if (!user) {
             return res.status(401).json({ success: false, message: "User not found" });
         }
 
         if (!roles.includes(user.role)) {
             return res.status(401).json({ success: false, message: "You're not authorized" });
         }
 
         next();
     } catch (error) {
         return res.status(500).json({ success: false, message: "Server error", error: error.message });
     }
 };