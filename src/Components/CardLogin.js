import "./cardLogin.css"

export default function CardLogin(props) {

    return(
        <div className="box">
            <h2>{props.title}</h2>
            <div className="input-fields">
                <form>
                    {props.register ? (
                        <div className="inputarea">
                           <input type="text"/>     
                        </div>
                    ) : <></>}

                    <div className="inputarea">
                        <input type="text" placeholder="Email"/>     
                    </div>

                    <div className="inputarea">
                        <input type="password" placeholder="senha"/>     
                    </div>
                </form>
            </div>
        </div>
    );
}