import CardLogin from "../../Components/CardLogin";
import "../Register/register.css"
import "./login.css"

export default function Login() {
    return (
        <div className="container-login">
            <CardLogin register={false} title="Login" />
            <div className="bola-cima"></div>
        </div>
    );
}