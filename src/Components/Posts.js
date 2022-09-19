import { useState } from "react";

export default function Posts() {

    const [like1, setLike1] = useState(false)
    const [like2, setLike2] = useState(false)
    return (
        <div class="posts">
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src="assets/img/meowed.svg" />
                        meowed
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src="assets/img/gato-telefone.svg" onClick={ () => setLike1(!like1)}/>
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            {like1 && <ion-icon name="heart" class="red" onClick={ () => setLike1(!like1)}></ion-icon>}
                            {!like1 && <ion-icon name="heart-outline" onClick={ () => setLike1(!like1)}></ion-icon>}
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src="assets/img/respondeai.svg" />
                        <div class="texto">
                            Curtido por <strong>respondeai</strong> e <strong>outras 101.524 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src="assets/img/barked.svg" />
                        barked
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src="assets/img/dog.svg" onClick={ () => setLike2(!like2)}/>
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                        {like2 && <ion-icon name="heart" class="red" onClick={ () => setLike2(!like2)}></ion-icon>}
                            {!like2 && <ion-icon name="heart-outline" onClick={ () => setLike2(!like2)}></ion-icon>}
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src="assets/img/adorable_animals.svg" />
                        <div class="texto">
                            Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}