import estilo from "./Botao.module.css"

function Botao ({text}){
    return (
        <div>
        <button className={estilo.estilo} >{text}</button>
        </div>
    )
}
export default Botao