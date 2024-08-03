import Botao from "../components/Botao"
import { Link } from "react-router-dom"

function Inicio () {
    return (
    <div>
     <h1>Receitas Saudáveis</h1>
     <p>Bem vindo ao site de receitas feito para ajudar você a conseguir ter uma alimentação saudável e nutritiva</p>
     <p>------------------------------------------------------------------------------------------------------------------------</p>
     <h3>Encontre a melhor opção para você nas opções apresentadas</h3>
     <Link to="/salada">
<Botao text = "SALADAS"></Botao>
</Link> 

<Link to="/frango">
<Botao text = "FRANGO"></Botao>
</Link> 

<Link to="/sobremesa">
<Botao text = "SOBREMESAS"></Botao>
</Link> 

     </div>
    )
}
export default Inicio