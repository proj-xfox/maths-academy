import { siteConfig } from "../../config/siteConfig";
import teacherImage from "../../assets/images/teacher.png";

function About() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Image Placeholder */}
                <div className="flex justify-center">
                    <img
                        src={teacherImage}
                        alt="Maths Teacher"
                        className="w-full max-w-sm h-80 md:h-96 object-cover rounded-2xl shadow-lg"
                    />
                </div>

                {/* Content */}
                <div>
                    <h3 className="text-3xl font-bold text-primary">
                        About {siteConfig.instituteName}
                    </h3>

                    <p className="mt-6 text-gray-600 leading-relaxed">
                        With years of dedicated teaching experience, we focus on building
                        strong conceptual foundations in Mathematics. Our structured
                        learning approach ensures students not only score well but truly
                        understand the subject.
                    </p>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                        We believe in personal attention, small batch sizes, regular
                        assessments, and consistent parent communication to ensure
                        measurable academic growth.
                    </p>

                    {/* Quick Highlights */}
                    <div className="mt-8 grid grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-2xl font-bold text-primary">15+</h4>
                            <p className="text-sm text-gray-500">Years Experience</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-primary">1000+</h4>
                            <p className="text-sm text-gray-500">Students Mentored</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-primary">95%</h4>
                            <p className="text-sm text-gray-500">Board Results</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-primary">Small</h4>
                            <p className="text-sm text-gray-500">Batch Size</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;