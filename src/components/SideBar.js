
import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

const infoUsuario = {imagem:"assets/img/catanacomics.svg", nome:"catanacomics"};

export default function SideBar(){
    return (
        <div class="sidebar">

            <Usuario imagem={infoUsuario.imagem} nome={infoUsuario.nome}></Usuario>
            <Sugestoes></Sugestoes>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}