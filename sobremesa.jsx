import Botao from "../components/Botao"
import { Link } from 'react-router-dom';

function Sobremesa(){
    return( 
<div> 
        <span>
            <Link to="/sobremesa">
                <Botao text="SOBREMESA"/>
            </Link>
            <p>sobremesa</p>
        </span>
        </div>

    )
    }
    export default Sobremesa