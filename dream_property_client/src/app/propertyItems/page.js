// /* use client */
import React, { useState } from "react";
import { list } from "./data/data";
import { TfiLocationPin } from "react-icons/tfi";
import axios from "axios"

export default function PropertyItems() {
    const [propertyDate, setPropertyDate] = useState(null);

    const fetchData = async () => {
        try {
            // const response = await axios.get('http://localhost:3001/property');
            // const data = response.data;
            // console.log(' data ', data);
        } 
        catch (error) {
            console.error('Error fetching data:', error);
        }
    };
      
    //   fetchData()
    //   console.log(' fetchData(); ', fetchData());

    return(
        <>
            <div className="container">
                <div className="content grid-3 mtop">
                    {list.map((val, index) => {
                        const { property_title, property_image, property_slug, property_location, property_description, property_price, property_type, property_status, property_area } = val;
                        return(
                            <div className="box shadow" key={index}>
                                <div className="img">
                                    <img src="images/dream_prop_home.avif" alt="" />
                                </div>
                                <div className="text">
                                    <h4 className="font-bold-class"> {property_title} </h4>
                                    <p>
                                        <TfiLocationPin className="location-color font-bold-class mr-2" /> 
                                        {property_location}
                                    </p>
                                    <p className="location-color font-bold-class"> {property_type} </p>
                                    <div className="flex">
                                        <h4 className="font-bold-class"> ${property_price} </h4>
                                        <p> <span className="font-semibold"> {property_area} </span> sq ft </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}