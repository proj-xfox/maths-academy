function Results() {
    const results = [
        {
            name: "Aarav Sharma",
            score: "98%",
            exam: "Class 10 Board",
        },
        {
            name: "Diya Patel",
            score: "95%",
            exam: "Class 12 Board",
        },
        {
            name: "Rohan Mehta",
            score: "96%",
            exam: "Class 9 Final",
        },
        {
            name: "Ananya Singh",
            score: "99%",
            exam: "Class 10 Board",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h3 className="text-3xl font-bold text-primary text-center">
                    Student Results
                </h3>

                <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
                    Consistent academic excellence with measurable improvement and
                    strong board results.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                    {results.map((student, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition"
                        >
                            <h4 className="text-xl font-semibold text-primary">
                                {student.score}
                            </h4>
                            <p className="text-gray-800 mt-2 font-medium">
                                {student.name}
                            </p>
                            <p className="text-gray-500 text-sm mt-1">
                                {student.exam}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Results;