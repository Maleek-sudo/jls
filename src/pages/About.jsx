import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function About() {
    const navigate = useNavigate();

    return (
        <div className="max-w-6xl mx-auto px-6 py-16">

            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-4">About JLS</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    JLS is more than clothing. It is a statement of style,
                    confidence, and individuality. Every piece is designed
                    to blend comfort, quality, and modern fashion.
                </p>
            </div>

            {/* Our Story */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        JLS was founded with one goal: creating premium
                        fashion pieces that stand out while remaining
                        comfortable and timeless.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        From tracksuits to jerseys and everyday essentials,
                        each product is crafted with attention to detail,
                        quality materials, and a commitment to excellence.
                    </p>
                </div>

                {/* Logo — no container, sits cleanly on white background */}
                <div className="flex items-center justify-center py-8">
                    <img
                        src={logo}
                        alt="Just A Lifestyle Logo"
                        className="w-80 h-80 object-contain"
                    />
                </div>
            </div>

            {/* Values */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-10">
                    What We Stand For
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Quality", text: "Premium materials and attention to every detail." },
                        { title: "Style", text: "Modern designs built to make a statement." },
                        { title: "Confidence", text: "Clothing that empowers you to stand out." },
                    ].map(({ title, text }) => (
                        <div key={title} className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-xl mb-3">{title}</h3>
                            <p className="text-gray-600">{text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Closing */}
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Join The Movement</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    JLS is a growing community of individuals who value
                    confidence, ambition, and authentic style.
                </p>
            </div>

        </div>
    );
}