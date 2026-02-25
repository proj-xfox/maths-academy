function Testimonials() {
    const testimonials = [
        {
            name: "Mrs. Sharma (Parent)",
            message:
                "My son’s confidence in Mathematics improved tremendously. The teaching approach is very structured and easy to understand.",
        },
        {
            name: "Aarav (Class 10 Student)",
            message:
                "Concepts are explained clearly with regular practice tests. I scored 98% in boards thanks to the guidance.",
        },
        {
            name: "Mr. Patel (Parent)",
            message:
                "Regular feedback and small batch sizes really make a difference. Highly recommended coaching institute.",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h3 className="text-3xl font-bold text-primary text-center">
                    What Students & Parents Say
                </h3>

                <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
                    Real experiences from students and parents who have seen measurable improvement.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition"
                        >
                            <p className="text-gray-600 leading-relaxed">
                                “{item.message}”
                            </p>
                            <h4 className="mt-6 font-semibold text-primary">
                                {item.name}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;