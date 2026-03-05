import { siteConfig } from "../../config/siteConfig";

function VideoSection() {

    const videos = [
        {
            title: "Algebra Concepts Demo",
            url: "https://www.youtube.com/embed/IWS9jW-5zpg",
        },
        {
            title: "Trigonometry Tricks",
            url: "https://www.youtube.com/embed/IcQun0jhz8M",
        },
        {
            title: "Calculus Introduction",
            url: "https://www.youtube.com/embed/9JsZvX2Hd54",
        },
    ];

    return (
        <section className="bg-white">
            <div className="max-w-6xl mx-auto px-4 py-20">

                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                        Demo Lectures
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Watch how mathematical concepts are explained in a simple
                        and structured way. These demo lectures help students
                        understand our teaching approach before joining.
                    </p>
                </div>

                {/* Video Grid */}
                <div className="grid md:grid-cols-3 gap-8">

                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl shadow-sm overflow-hidden"
                        >
                            <div className="relative pb-[56.25%]">
                                <iframe
                                    src={video.url}
                                    title={video.title}
                                    className="absolute top-0 left-0 w-full h-full"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800">
                                    {video.title}
                                </h4>
                            </div>
                        </div>
                    ))}

                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <a
                        href="#enquiry"
                        className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                    >
                        Book Free Demo Class
                    </a>
                </div>

            </div>
        </section>
    );
}

export default VideoSection;
