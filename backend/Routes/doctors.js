import express from 'express';
import {
  updateDoctor,
  deleteDoctor,
  getAllDoctor,
  getSingleDoctor,
  getDoctorProfile,
} from '../Controllers/doctorController.js'; // Adjust path as necessary
import { authenticate, restrict } from '../auth/verifyToken.js'; // Adjust path as necessary
import reviewRouter from './review.js'; // Adjust path as necessary

const router = express.Router({ mergeParams: true });

// Nested Route for Reviews under a specific Doctor
router.use('/:doctorId/reviews', reviewRouter);

// Doctor Routes
router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);

router.get("/profile/me", authenticate,restrict(['doctor']),getDoctorProfile);

export default router;
