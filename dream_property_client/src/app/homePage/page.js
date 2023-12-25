
import Banner from "@/components/banner";
import Headers from "@/components/headers";
// import PropertyItems from "../propertyItems/page";
import PropertyItems from "@/components/property-items";

export default function HomePage() {
    return(
        <>
            <Headers />
            <Banner />
            {/* <PropertyItems /> */}
            <PropertyItems />
        </>
    )
}