import { siteConfig } from "../../config/siteConfig";
import teacherImage from "../../assets/images/teacher.png";
function Hero() {
    return (
        <section className="bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
                        {siteConfig.tagline}
                    </h2>

                    <p className="mt-6 text-lg text-gray-600">
                        Helping students build strong mathematical concepts with
                        personal attention, structured learning, and regular testing.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <a
                            href="#enquiry"
                            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                        >
                            Book Free Demo
                        </a>

                        <a
                            href={`https://wa.me/${siteConfig.whatsapp}`}
                            target="_blank"
                            className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition"
                        >
                            WhatsApp Now
                        </a>
                    </div>
                </div>

                {/* Right Side (Image Placeholder) */}
                <div className="flex justify-center">
                    <img
                        src={teacherImage}
                        alt="Maths Teacher"
                        className="w-full max-w-sm h-80 md:h-96 object-cover rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;