import * as mongoose from 'mongoose';

export const PropertySchema = new mongoose.Schema({
    property_title: { type: String, required: true },
    property_image: { type: String, required: true },
    property_slug: { type: String, required: true },
    property_location: { type: String, required: true },
    property_description: { type: String, required: true },
    property_price: { type: String, required: true },
    property_type: { type: String, required: true },
    property_status: { type: String, required: true },
    property_area: { type: String, required: true },
});