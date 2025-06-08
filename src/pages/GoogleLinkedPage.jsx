import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const GoogleLinkedPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get("token");

        if (token) {
            localStorage.setItem("token", token);
            navigate("/register");
        } else {
            navigate("/login");
        }
    }, [location, navigate]);

    return <p>Logging you in...</p>;
};

