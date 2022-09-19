import { useState } from "react";

export default function User() {
    const [name, setName] = useState("catanacomics")
    const [userImg, setUserImg] = useState("assets/img/catanacomics.svg")
    return (
        <div class="usuario">
            <img src={userImg} onClick={() => setUserImg(prompt("Qual o link da sua foto?"))}/>
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                    {name}
                    <ion-icon name="pencil" onClick={() => setName(prompt("Qual o seu nome?"))} ></ion-icon>
                </span>
            </div>
        </div >
    );
}