import "./cardLogin.css"
import { useNavigate } from "react-router-dom";

export default function CardLogin(props) {

    const navigate = useNavigate()


    function switchToReg() {
        navigate("/register")
    }

    return(
        <div className="box">
            <h2>{props.title}</h2>
            <div className="input-fields">
                <form>
                    {props.register ? (
                        <div className="inputarea">
                           <input type="text" placeholder="Nome"/>     
                        </div>
                    ) : <></>}

                    <div className="inputarea">
                        <input type="text" placeholder="Email"/>     
                    </div>

                    <div className="inputarea">
                        <input type="password" placeholder="senha"/>     
                    </div>

                    <div className="btnarea" >
                        <button type="submit" >
                            Registre-se
                        </button>
                        <button onClick={switchToReg()}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}