import figure from "../../Assets/figureLogin.png"
import CardLogin from "../../Components/CardLogin";
import './login.css'

export default function Login() {

    return(
        <div className="container">
           <div className="left" >
                <div className="content">
                    <div className="title">
                        <h1>Bem-vindo(a) ao MyGest</h1>
                        <span>Controle suas finanças e cuide do seu dinheiro.</span>
                    </div>
                    <img src={figure} className="figure" />
                </div>
           </div>
           <div className="right">
                <h1>Bem-vindo(a) de volta!</h1>
                <CardLogin title="Login" register={false}/>
                <div className="bola-cima"></div>
           </div>
        </div>
    );
}