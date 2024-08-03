import Botao from "../components/Botao"
import { Link } from 'react-router-dom';

function Frango(){
    return( 
<div>  
        <span>
            <Link to="/frango">
                <Botao text="FRANGO"/>
            </Link>
            <p>frango</p>
        </span>
        </div>

    )
    }
    export default Frango