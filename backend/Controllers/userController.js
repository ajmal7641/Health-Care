import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js"

export const updateUser = async (req, res) => {
      const id = req.params.id;
      try {
            const updatedUser = await User.findByIdAndUpdate(
                  id,
                  { $set: req.body },
                  { new: true }
            );
            res
                  .status(200)
                  .json({
                        success: true,
                        message: "Successfully updated",
                        data: updatedUser,
                  });
      } catch (err) {
            res.status(500).json({ success: false, message: "Failed to update" });
      }
};

export const deleteUser = async (req, res) => {
      const id = req.params.id;
      try {
            await User.findByIdAndDelete(
                  id,

            );
            res
                  .status(200)
                  .json({
                        success: true,
                        message: "Successfully deleted",

                  });
      } catch (err) {
            res.status(500).json({ success: false, message: "Failed to delete" });
      }
};

export const getSingleUser = async (req, res) => {
      const id = req.params.id;
      try {
            const user = await User.findById(id).select("-password");

            res.status(200)
                  .json({
                        success: true,
                        message: "user found",
                        data: user,
                  });
      } catch (err) {
            res.status(404).json({ success: false, message: "No user Found" });
      }
};

export const getAllUser = async (req, res) => {

      try {
            const users = await User.find({}).select("-password");
            res
                  .status(200)
                  .json({
                        success: true,
                        message: "users found",
                        data: users,
                  });
      } catch (err) {
            res.status(404).json({ success: false, message: "Not Found" });
      }
};

// export const getUserProfile = async (req, res) => {
//       const userId = req.userId

//       try {
//             const user = await user.findById(userId)

//             if(!user){
//                  return res.status(404).json({success:false, message:'user not found' })
//             }
//                  const {password ,...rest } = user._doc

//                  res.status(200).json({success:true, message:'profile is getting', data:{...rest} })


//       } catch (err) {
//             res.status(500).json({ success: false, message: "something went wrong ,cannot get " });

//       }

// }

// export const getMyAppointments = async(req,res)=>{
//       try {

//             // step1 : retrieve appointments from booking for specific user 
//             const bookings = await Booking.find({user:req.userId})

//             // step2 : extract doctor ids from appointment bookings 
//             const doctorIds = bookings.map(el=>el.doctor.id)

//             // step3 : retrieve doctors using doctor ids
//             const doctors = await Doctor.find({_id: {$in :doctorIds}}).select('-password')
//             res
//             .status(200).json({success:true, 
//             message:'Appointments are getting', 
//             data:doctors 
//       })


//       } catch (err) {
//             res.status(500).json({ success: false, message: "something went wrong ,cannot get " });

//       }
// }
export const getUserProfile = async (req, res) => {
      const userId = req.userId;

      try {
            const userData = await User.findById(userId); // Assuming 'User' is your user model

            if (!userData) {
                  return res.status(404).json({ success: false, message: 'User not found' });
            }

            const { password, ...rest } = userData._doc;

            res.status(200).json({ success: true, message: 'Profile retrieved', data: { ...rest } });
      } catch (err) {
            console.error('Error fetching user profile:', err); // Log the actual error
            res.status(500).json({ success: false, message: "Something went wrong, cannot get profile" });
      }
};

// export const getMyAppointments = async (req, res) => {
//       try {
//         // Step 1: Retrieve appointments from booking for the specific user
//         console.log('User ID:', req.userId); // Log the user ID for debugging
//         const bookings = await Booking.find({ user: req.userId });

//         if (!bookings || bookings.length === 0) {
//           return res.status(404).json({
//             success: false,
//             message: 'No bookings found for this user',
//           });
//         }

//         // Step 2: Extract doctor IDs from appointment bookings
//         const doctorIds = bookings.map((el) => el.doctor.id);

//         // Step 3: Retrieve doctors using doctor IDs
//         const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select('-password');

//         res.status(200).json({
//           success: true,
//           message: 'Appointments retrieved successfully',
//           data: doctors,
//         });
//       } catch (err) {
//         console.error('Error fetching appointments:', err);
//         res.status(500).json({
//           success: false,
//           message: 'Something went wrong, cannot get appointments',
//         });
//       }
//     };



// export const getMyAppointments = async (req, res) => {
//       try {
//         // Step 1: Retrieve appointments from booking for the specific user
//         console.log('User ID:', req.userId); // Log the user ID for debugging

//         // Ensure req.userId is valid
//         if (!req.userId) {
//           return res.status(400).json({
//             success: false,
//             message: 'User ID is missing',
//           });
//         }

//         const bookings = await Booking.find({ user: req.userId }).populate('doctor');

//         if (!bookings || bookings.length === 0) {
//           return res.status(404).json({
//             success: false,
//             message: 'No bookings found for this user',
//           });
//         }

//         console.log('Bookings:', bookings); // Log bookings for debugging

//         // Step 2: Extract doctor IDs from appointment bookings
//         const doctorIds = bookings.map((booking) => booking.doctor._id);

//         // Ensure doctorIds are valid
//         if (!doctorIds.length) {
//           return res.status(404).json({
//             success: false,
//             message: 'No doctor IDs found',
//           });
//         }

//         console.log('Doctor IDs:', doctorIds); // Log doctor IDs for debugging

//         // Step 3: Retrieve doctors using doctor IDs
//         const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select('-password');

//         if (!doctors || doctors.length === 0) {
//           return res.status(404).json({
//             success: false,
//             message: 'No doctors found for these IDs',
//           });
//         }

//         res.status(200).json({
//           success: true,
//           message: 'Appointments retrieved successfully',
//           data: doctors,
//         });
//       } catch (err) {
//         console.error('Error fetching appointments:', err);
//         res.status(500).json({
//           success: false,
//           message: 'Something went wrong, cannot get appointments',
//         });
//       }
//     };

// export const getMyAppointments = async (req, res) => {
//       try {
//         // Step 1: Retrieve appointments from booking for the specific user
//         console.log('User ID:', req.userId); // Log the user ID for debugging
//         const bookings = await Booking.find({ user: req.userId });

//         if (!bookings || bookings.length === 0) {
//           return res.status(404).json({
//             success: false,
//             message: 'No bookings found for this user',
//           });
//         }

//         // Step 2: Extract doctor IDs from appointment bookings
//         const doctorIds = bookings.map((el) => el.doctor.id);

//         // Step 3: Retrieve doctors using doctor IDs
//         const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select('-password');

//         res.status(200).json({
//           success: true,
//           message: 'Appointments retrieved successfully',
//           data: doctors,
//         });
//       } catch (err) {
//         console.error('Error fetching appointments:', err);
//         res.status(500).json({
//           success: false,
//           message: 'Something went wrong, cannot get appointments',
//         });
//       }
//     };



// export const getMyAppointments = async (req, res) => {
//   try {
//     // Log the user ID to verify it is correctly set
//     console.log('User ID:', req.userId);

//     // Step 1: Retrieve appointments from booking for the specific user
//     const bookings = await Booking.find({ user: req.userId });

//     // Check if bookings exist
//     if (!bookings || bookings.length === 0) {
//       console.log('No bookings found for this user');
//       return res.status(404).json({
//         success: false,
//         message: 'No bookings found for this user',
//       });
//     }

//     // Step 2: Extract doctor IDs from appointment bookings
//     const doctorIds = bookings.map((el) => el.doctor.id);

//     // Step 3: Retrieve doctors using doctor IDs
//     const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select('-password');

//     // Return the appointments data
//     res.status(200).json({
//       success: true,
//       message: 'Appointments retrieved successfully',
//       data: doctors,
//     });
//   } catch (err) {
//     console.error('Error fetching appointments:', err);
//     res.status(500).json({
//       success: false,
//       message: 'Something went wrong, cannot get appointments',
//     });
//   }
// };

export const getMyAppointments = async (req, res) => {
      try {
            // step 1 retrieve appointments from booking for specific user 
            const bookings = await Booking.find({ user: req.userId });
            // step-2 extract doctor ids from appointment bookings
            const doctorIds = bookings.map(elel.doctor.id);
            // step 3: retrieve doctors using doctor ids
            const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
                  "-password"
            );
            res
                  .status(200)
                  .json({
                        success: true,
                        message: "Appointments are getting",
                        data: doctors,
                  });
      } catch (err) {
            res
                  .status(500)
                  .json({ success: false, message: "Something went wrong, cannot get" });
      };
}
