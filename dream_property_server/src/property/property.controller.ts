import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyDto } from './property.dto';

@Controller('property')
export class PropertyController {
    constructor(
        private property_service: PropertyService
    ) {}

    @Get()
    public getProperties() {
        return this.property_service.getProperties();
    }

    @Get(':id')
    public async getPropertyById(@Param('id') id: number) {
        return this.property_service.getPropertyById(id);
    }

    @Delete(':id')
    public async deletePropertyById(@Param('id') id: number) {
        return this.property_service.deletePropertyById(id);
    }

    @Post()
    public postProperty(@Body() property: PropertyDto) {
        return this.property_service.postProperty(property);
    }

    @Put(':id')
    public async putPropertyById(@Param('id') id: number, @Query() query) {
        const property_name = query.property_name;
        const property_value = query.property_value;
        return this.property_service.putPropertyById(id, property_name, property_value);
    }
}
