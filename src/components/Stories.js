const storiesUsuarios = [
    {imagem: "assets/img/9gag.svg", usuario: "9gag"}, 
    {imagem: "assets/img/meowed.svg", usuario: "meowed"},
    {imagem: "assets/img/barked.svg", usuario: "barked"},
    {imagem: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet"},
    {imagem: "assets/img/wawawicomics.svg", usuario: "wawawicomics"},
    {imagem: "assets/img/respondeai.svg", usuario: "respondeai"},
    {imagem: "assets/img/filomoderna.svg", usuario: "filomoderna"},
    {imagem: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet"}
];

export default function Stories(){
    return (
        <div class="stories">
            {storiesUsuarios.map( ( storie ) => {
                return (
                    <Storie imagem={storie.imagem} usuario={storie.usuario}/>
                    );
                } 
            )}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Storie (props){
    return(
        <div class="story">
            <div class="imagem">
                <img src= {props.imagem} alt={props.usuario}/>
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    );
}