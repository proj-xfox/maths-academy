import { siteConfig } from "../../config/siteConfig";

function Navbar() {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-primary">
                    {siteConfig.instituteName}
                </h1>

                <a
                    href="#enquiry"
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                >
                    Enquire Now
                </a>
            </div>
        </nav>
    );
}

export default Navbar;