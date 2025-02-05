import { useState } from "react";
import { ComentIf } from "./interface";
import "./comentarios.css";
export default function Comentario() {
    const [comentarios, setComentarios] = useState<ComentIf[]>([]);
    const [novoComentario, setNovoComentario] = useState<string>("");

    const renderComent = () => {
        if (novoComentario.trim() === "") return; // inline if verifica se novoComentario está vazio, se estiver, não prossegue 
        const novo: ComentIf = {
            id: comentarios.length + 1,
            texto: novoComentario
            }
        setComentarios([...comentarios, novo]);
        setNovoComentario("");
    }


    return (
        <>
            <div className="container-comentario">
                <h3>Comentários</h3>
                <textarea
                    value={novoComentario}
                    onChange={(e) => setNovoComentario(e.target.value)}
                    placeholder="Digite seu comentário..."
                />
                <button onClick={renderComent}>Enviar</button>

                <ul>
                    {comentarios.map((comentarios) => (
                        <li key={comentarios.id}>
                            {comentarios.texto}</li>
                    ))}
                </ul>
            </div>
        </>
    );

};