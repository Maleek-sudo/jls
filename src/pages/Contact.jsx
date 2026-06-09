import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();

    return (
        <div className="max-w-6xl mx-auto px-6 py-16">

            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-4">
                    Contact Us
                </h1>

                <p className="text-gray-600 max-w-2xl mx-auto">
                    We'd love to hear from you. Whether you have questions
                    about our products, orders, or collaborations, feel free
                    to get in touch.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">

                {/* Contact Info */}
                <div>
                    <h2 className="text-3xl font-bold mb-6">
                        Get In Touch
                    </h2>

                    <div className="space-y-6">

                        <div>
                            <h3 className="font-semibold text-lg">
                                📍 Address
                            </h3>
                            <p className="text-gray-600">
                                Lagos, Nigeria
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">
                                📞 Phone
                            </h3>
                            <a
                                href="tel:+2348148082132"
                                className="text-gray-600 hover:text-black"
                            >
                                +234 814 808 2132
                            </a>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">
                                ✉️ Email
                            </h3>
                            <a
                                href="mailto:hello@justalifestyle.com"
                                className="text-gray-600 hover:text-black"
                            >
                                hello@justalifestyle.com
                            </a>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">
                                🌐 Social Media
                            </h3>

                            <div className="flex gap-4 mt-2">
                                <a
                                    href="https://www.instagram.com/justalifestyle10"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline"
                                >
                                    Instagram
                                </a>

                                <a
                                    href="https://www.tiktok.com/@justalifestyle10"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline"
                                >
                                    TikTok
                                </a>

                                <a
                                    href="https://wa.me/2348148082132"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline"
                                >
                                    WhatsApp
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white shadow-sm rounded-xl p-8 border">

                    <h2 className="text-2xl font-bold mb-6">
                        Send a Message
                    </h2>

                    <form className="space-y-5">

                        <div>
                            <label className="block mb-2 text-sm font-medium">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium">
                                Message
                            </label>

                            <textarea
                                rows="5"
                                placeholder="Write your message..."
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                        >
                            Send Message
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
}