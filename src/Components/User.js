import { useState } from "react";

export default function User() {
    const [name, setName] = useState("catanacomics")
    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
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