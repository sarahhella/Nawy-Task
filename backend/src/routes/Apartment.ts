import express from 'express';
import controller from '../controllers/Apartment';

const router = express.Router();

router.get('/getApartment/:apartmentId', controller.readApartment);
router.get('/getApartments', controller.readAllApartments);
router.post('/createApartment', controller.createApartment);

export default router;
