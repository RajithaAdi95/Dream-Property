import Link from "next/link"
import { navLinks } from "@/components/data/data"


export default function Headers() {
    // const router = useRouter();
    // const handleClick = () => {
    //     console.log('Clicked');
    //     // router.navigate('/adminDashboard');
    // };

    return(
        <>
            <div className="container flex">
            <div className="py-5"> Real Estate </div>

            <div className="flex">
                {/* <div> Home </div> */}
                <nav className="bg-white border-white-200 dark:bg-white-900">
                    {navLinks.map((link) => {
                        return(
                        <Link key={link.id} href={link.path} className="py-2 px-3 text-black0" aria-current="page"> {link.text} </Link>
                        )
                    })}
                    {/* <ul className="font-medium ">
                        <li>
                        <Link href="/components/AdminDashboard" className="py-2 px-3 text-black0" aria-current="page">Home</Link>
                        </li>
                    </ul> */}
                </nav>
                {/* onClick={handleClick} */}
                <button className="btn-1 ml-3 px-4 py-1"> Add Property </button>
            </div>
            </div>
        </>
    )
}