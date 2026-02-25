import { useState } from "react";

function EnquiryForm() {
    const [formData, setFormData] = useState({
        studentName: "",
        parentPhone: "",
        className: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // For now just simulate submission
        console.log("Form Submitted:", formData);

        setSubmitted(true);

        // Reset form
        setFormData({
            studentName: "",
            parentPhone: "",
            className: "",
            message: "",
        });
    };

    return (
        <section id="enquiry" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
                <h3 className="text-3xl font-bold text-primary text-center">
                    Enquire Now
                </h3>

                <p className="text-gray-600 text-center mt-4">
                    Fill the form below and we will contact you shortly.
                </p>

                <div className="bg-white mt-12 p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm">
                    {submitted && (
                        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-sm">
                            Thank you! We will contact you soon.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Student Name
                            </label>
                            <input
                                type="text"
                                name="studentName"
                                value={formData.studentName}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Parent Phone Number
                            </label>
                            <input
                                type="tel"
                                name="parentPhone"
                                value={formData.parentPhone}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Class
                            </label>
                            <select
                                name="className"
                                value={formData.className}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="">Select Class</option>
                                <option value="6">Class 6</option>
                                <option value="7">Class 7</option>
                                <option value="8">Class 8</option>
                                <option value="9">Class 9</option>
                                <option value="10">Class 10</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Message (Optional)
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
                        >
                            Submit Enquiry
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default EnquiryForm;