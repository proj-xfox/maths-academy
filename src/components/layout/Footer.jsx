import { siteConfig } from "../../config/siteConfig";

function Footer() {
    return (
        <footer className="bg-gray-100 mt-16">
            <div className="max-w-6xl mx-auto px-4 py-8 text-center">

                <h2 className="font-semibold text-lg text-primary">
                    {siteConfig.instituteName}
                </h2>

                <p className="text-sm text-gray-600 mt-2">
                    © {new Date().getFullYear()} All rights reserved.
                </p>

                <p className="text-xs text-gray-500 mt-4">
                    Designed & Developed by{" "}
                    <a
                        href="https://vedaxon.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium hover:underline"
                    >
                        Vedaxon
                    </a>
                </p>

            </div>
        </footer>
    );
}

export default Footer;