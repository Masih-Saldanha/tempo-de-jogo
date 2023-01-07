import { useNavigate } from "react-router-dom"

export default function Main() {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate("/drake")}>DRAKE</button>
    )
}