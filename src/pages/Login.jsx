import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // simple fake login logic for now
        if (email && password) {
            localStorage.setItem("user", JSON.stringify({ email }));
            navigate("/"); // redirect to homepage after login
        } else {
            alert("Please fill in all fields");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Login</h2>

                <form onSubmit={handleLogin} style={styles.form}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                    />

                    <button type="submit" style={styles.button}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
    },
    card: {
        width: "320px",
        padding: "30px",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
    },
    input: {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "6px",
    },
    button: {
        padding: "10px",
        background: "#111827",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    },
};