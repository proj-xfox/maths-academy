function WhyChooseUs() {
    const points = [
        {
            title: "Small Batch Size",
            description:
                "Limited students per batch to ensure personal attention and better understanding.",
        },
        {
            title: "Concept-Based Teaching",
            description:
                "Focus on fundamentals so students build strong clarity instead of memorizing formulas.",
        },
        {
            title: "Regular Tests & Analysis",
            description:
                "Frequent assessments with performance tracking and improvement strategy.",
        },
        {
            title: "Parent Communication",
            description:
                "Regular updates to parents about student progress and academic growth.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h3 className="text-3xl font-bold text-primary text-center">
                    Why Choose Us
                </h3>

                <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
                    A structured learning environment designed to build confidence,
                    discipline, and consistent academic performance.
                </p>

                <div className="grid md:grid-cols-2 gap-10 mt-12">
                    {points.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
                        >
                            <h4 className="text-xl font-semibold text-primary">
                                {item.title}
                            </h4>
                            <p className="text-gray-600 mt-4 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;