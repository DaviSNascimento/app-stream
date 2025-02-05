import './telaInicio.css'; // Importando os estilos
import Navbar from '../navbar/Navbar';
import ListaVideo from '../listaVideos/listaVideos';
import { useState } from 'react';
import { video, dadosMainVideos } from '../listaVideos/interface';
import Comentario from '../comentarios/comentarios';
export default function TelaInicio() {
    const [video] = useState<video>(dadosMainVideos);

    const renderMainVideo = () => (
        <>
            <div className='video-container'>
                <iframe
                    // className='video-box'
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
                <h2 id='title-video'>{video.title}</h2>
                <p id='description-video'><h4 style={{fontSize:"1.5em", margin:"10px 0px"}}>Descrição:</h4>{video.description}</p>
            </div>
        </>
    )
    return (
        <>
            <Navbar />
                {/* Vídeo Principal */}
            <div className="tela-inicio-container">

                <div className="main-content">
                    {renderMainVideo()}
                    <Comentario/>
                </div>
                <ListaVideo/>

            </div>
        </>
    );
}
