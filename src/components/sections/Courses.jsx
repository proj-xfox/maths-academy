function Courses() {
    const courses = [
        {
            title: "Grade 6–8 Foundation",
            description:
                "Strong conceptual base with regular practice and doubt-solving sessions.",
        },
        {
            title: "Grade 9–10 Board Preparation",
            description:
                "Complete syllabus coverage with structured tests and board exam strategy.",
        },
        {
            title: "Grade 11–12 Science",
            description:
                "Advanced problem-solving techniques and competitive exam foundation.",
        },
        {
            title: "Crash / Revision Batches",
            description:
                "Focused revision sessions before exams with targeted practice papers.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h3 className="text-3xl font-bold text-primary text-center">
                    Courses Offered
                </h3>

                <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
                    Structured batches designed to build clarity, confidence, and strong
                    academic performance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
                        >
                            <h4 className="text-xl font-semibold text-primary">
                                {course.title}
                            </h4>
                            <p className="text-gray-600 mt-4 leading-relaxed">
                                {course.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Courses;