import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Apartment from '../models/Apartment';

const readAllApartments = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const apartments = await Apartment.find();
        return res.status(200).json({ apartments });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const readApartment = async (req: Request, res: Response, next: NextFunction) => {
    const apartmentId = req.params.apartmentId;
    try {
        const apartment = await Apartment.findById(apartmentId);
        if (apartment) {
            return res.status(200).json({ apartment });
        } else {
            return res.status(404).json({ message: 'Not Found' });
        }
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const createApartment = async (req: Request, res: Response, next: NextFunction) => {
    const {
        title,
        compoundName,
        saleType,
        description,
        startPrice,
        maxPrice,
        finishing,
        location,
        image,
        area,
        numberOfBedrooms,
        numberOfBathrooms,
        installmentsPeriod,
        installmentMonthlyValue,
        sellerPhoneNumber,
        deliveryYear,
        amenities
    } = req.body;

    try {
        // Find the highest existing referenceNumber
        const highestApartment = await Apartment.findOne().sort({ referenceNumber: -1 });
        let referenceNumber = 1; // Default referenceNumber if no documents exist

        if (highestApartment) {
            // Increment the highest referenceNumber by 1
            referenceNumber = highestApartment.referenceNumber + 1;
        }

        const apartment = new Apartment({
            _id: new mongoose.Types.ObjectId(),
            referenceNumber,
            title,
            compoundName,
            saleType,
            description,
            startPrice,
            maxPrice,
            finishing,
            location,
            image,
            area,
            numberOfBedrooms,
            numberOfBathrooms,
            installmentsPeriod,
            installmentMonthlyValue,
            sellerPhoneNumber,
            deliveryYear,
            amenities
        });
        await apartment.save();
        return res.status(201).json({ apartment });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export default { readAllApartments, readApartment, createApartment };
