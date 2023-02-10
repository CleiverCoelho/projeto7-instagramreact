const sugestoesUsuarios = [
    {imagem: "assets/img/chibirdart.svg", usuario: "chibirdart", razao: "Segue você"}, 
    {imagem: "assets/img/bad.vibes.memes.svg", usuario: "bad.vibes.memes", razao: "Segue você"},
    {imagem: "assets/img/razoesparaacreditar.svg", usuario: "razoesparaacreditar", razao: "Novo no Instagram"},
    {imagem: "assets/img/adorable_animals.svg", usuario: "adorable_animals", razao: "Segue você"},
    {imagem: "assets/img/smallcutecats.svg" , usuario: "smallcutecats", razao: "Novo no Instagram"}
];


export default function Sugestoes(){
    return(
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>


            {sugestoesUsuarios.map( (sugestao) => <Sugestao imagem={sugestao.imagem} usuario={sugestao.usuario} razao={sugestao.razao}/>)}
        </div>
    );
}

function Sugestao(props){
    return (
        <div class="sugestao">
                        <div class="usuario">
                            <img src={props.imagem} alt={props.usuario}/>
                            <div class="texto">
                                <div class="nome">{props.usuario}</div>
                                <div class="razao">{props.razao}</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>
    )
}