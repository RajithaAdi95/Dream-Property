import { Injectable, HttpException } from '@nestjs/common';
import { resolve } from 'path';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IProperty } from './interfaces/property.interface';
import { PropertyDto } from './property.dto';

@Injectable()
export class PropertyService {

    constructor(
        @InjectModel('Property') private readonly propertyModel: Model<IProperty>
    ) {}

    // delete property by id
    public async deletePropertyById(id: number): Promise<PropertyDto> {
        const property = await this.propertyModel.findOneAndDelete({ _id: id }).exec();
        if(!property) {
            throw new HttpException('Property Not Found', 409);
        }
        return property;
    }

    // get all properties
    public async getProperties(): Promise<PropertyDto[]> {
        const properties = await this.propertyModel.find({}, { __v: false }).exec();
        if(!properties || !properties[0]) {
            throw new HttpException('Not Found', 404);
        }
        return properties;
    }

    // get property by id
    public async getPropertyById(id: number): Promise<PropertyDto> {
        const property = await this.propertyModel.findOne({ _id: id }, { __v: false }).exec();
        if(!property) {
            throw new HttpException('Property Not Found', 409);
        }
        return property;
    }

    // create new property
    public async postProperty(new_property: PropertyDto) {
        const property = new this.propertyModel(new_property);
        const new_created_property = await property.save();
        return new_created_property;
    }

    // update the property
    public async putPropertyById(id: number, property_name: string, property_value: string): Promise<PropertyDto> {
        const property = await this.propertyModel.findOneAndUpdate({ _id: id }, {
            [property_name]: property_value
        }).exec();
        if(!property) {
            throw new HttpException('Property Not Found', 409);
        }
        return property;
    }
}
