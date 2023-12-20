import { FaSearch } from 'react-icons/fa';
import { MdOutlineZoomIn } from "react-icons/md";
import Heading from './heading';

export default function Banner() {
    return(
        <section className="banner-design mx-auto">
            <div className="container">
                <Heading title="Looking To Buy or Rent a Property?" description="Find Your Dream Home"/>
                <form className="flex">
                    <div className="box">
                        {/* <input type="text" placeholder="All Main Locations"/> */}
                        <select id="countries" className='box text-gray-900' >
                            {/* <option value="" disabled selected> All Main Locations </option> */}
                            <option value="united-states">United States</option>
                        </select>
                    </div>
                    <div className="box">
                        <select id="countries" className='box text-gray-900' >
                            {/* <option value="" disabled selected> All Status </option> */}
                            <option value="united-states">United States</option>
                        </select>
                    </div>
                    <div className="box">
                        <select id="countries" className='box text-gray-900' >
                            {/* <option value="" disabled selected> All Types </option> */}
                            <option value="united-states">United States</option>
                        </select>
                    </div>
                    <button className='btn-1 flex ml-3 px-2 py-2'>
                        <MdOutlineZoomIn />
                    </button>
                    <button className="btn-1 search-btn flex ml-3 px-4 py-1">
                        <FaSearch className='mr-2'/>
                        Search
                    </button>
                </form>
            </div>
        </section>
    )
}