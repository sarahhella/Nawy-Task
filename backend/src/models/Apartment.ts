import mongoose, { Document, Schema } from 'mongoose';

export interface IApartment {
    referenceNumber: number;
    title: string;
    compoundName: string;
    saleType: string;
    description: string;
    startPrice: string;
    maxPrice: string;
    finishing: 'Finished' | 'Not Finished';
    location: string;
    image: string;
    area: string;
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    installmentsPeriod: string;
    installmentMonthlyValue: string;
    sellerPhoneNumber: string;
    deliveryYear: number;
    amenities: string[];
}

export interface IApartmentModel extends IApartment, Document {}

const ApartmentSchema: Schema = new Schema(
    {
        referenceNumber: { type: Number, required: true, unique: true },
        title: { type: String, required: true },
        compoundName: { type: String, required: true },
        saleType: { type: String, required: true },
        description: { type: String, required: true },
        startPrice: { type: String, required: true },
        maxPrice: { type: String, required: true },
        finishing: { type: String, enum: ['Finished', 'Not Finished'], required: true },
        location: { type: String, required: true },
        image: { type: String, required: false },
        area: { type: String, required: true },
        numberOfBedrooms: { type: Number, required: true },
        numberOfBathrooms: { type: Number, required: true },
        installmentsPeriod: { type: String, required: true },
        installmentMonthlyValue: { type: String, required: true },
        sellerPhoneNumber: { type: String, required: true },
        deliveryYear: { type: Number, required: true },
        amenities: [{ type: String, required: true }]
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IApartmentModel>('Apartment', ApartmentSchema);
