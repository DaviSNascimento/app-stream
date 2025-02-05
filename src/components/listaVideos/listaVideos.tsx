// Lista de videos
import { useState } from "react";
import { listaVideos , dadosVideos} from "./interface";
import "./listaVideos.css"

export default function ListaVideo() {
const [listaVideos] = useState<listaVideos[]>(dadosVideos); // add posteriormente setListaVideos

    const renderVideo = () => {
       return listaVideos.map( ([index, itens]) => 
        (
            <>
            <div 
            className="lista-video-container"
            key={index}>
                <a href={itens.src} target="_blank">
                <img src={itens.thumbnail} alt="thumbnail"/>
                </a>
                <div className="lista-text-container">
                <h3>{itens.title}</h3>
                <p>{itens.description}</p>
                </div>
            </div>
            </>
        ))
    }

    return(
        <>
            <div className="lista-container">
                <h2>Listagem de Videos</h2>
                {renderVideo()}
            </div>
            

        </>
    );
};