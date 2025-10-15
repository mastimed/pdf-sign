import React from 'react';

const testimonials = [
    {
        quote: "This tool is a lifesaver! I had to sign a contract urgently and was away from my printer. Scanned it with my phone, edited, signed, and sent it back in minutes.",
        name: "Sarah L.",
        role: "Freelance Designer",
        stars: 5,
    },
    {
        quote: "The text extraction is surprisingly accurate. It saved me hours of re-typing from scanned meeting notes. The interface is clean and super easy to use.",
        name: "Michael B.",
        role: "Project Manager",
        stars: 5,
    },
    {
        quote: "As a student, I use this constantly to digitize textbook pages and notes. The ability to edit the text and export as a searchable PDF is fantastic.",
        name: "Jessica P.",
        role: "University Student",
        stars: 4,
    },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};


const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-16 sm:py-24 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white">
                        Loved by Professionals and Students
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        Don't just take our word for it. See what our users are saying.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-slate-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                            <StarRating rating={testimonial.stars} />
                            <blockquote className="mt-4 text-slate-700 dark:text-slate-300">
                                "{testimonial.quote}"
                            </blockquote>
                            <figcaption className="mt-4">
                                <p className="font-semibold text-slate-800 dark:text-white">{testimonial.name}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                            </figcaption>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
