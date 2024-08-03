import Botao from "../components/Botao"
import { Link } from 'react-router-dom';

function Salada(){
    return( 
<div>  
        <span>
            <Link to="/salada">
                <Botao text="SALADA"/>
            </Link>
            <p>salada</p>
        </span>
        </div>

    )
    }
    export default Salada