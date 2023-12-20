import { list } from "./data/data";
import { SlLocationPin } from "react-icons/sl";

export default function PropertyItems() {
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
                                    <h4> {property_title} </h4>
                                    <p>
                                        <SlLocationPin className="location-color mr-2" /> {property_location}
                                    </p>
                                    <p> {property_type} </p>
                                    <div className="flex">
                                        <h4> ${property_price} </h4>
                                        <p> {property_area} sq ft </p>
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