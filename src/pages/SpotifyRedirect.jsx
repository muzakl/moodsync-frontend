import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";

export const SpotifyRedirect = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get("token");

        if (token) {
            localStorage.setItem("token", token);
            navigate("/playlist");
        } else {
            navigate("/login");
        }
    }, [location, navigate]);

    return <p>Logging you in...</p>;
}