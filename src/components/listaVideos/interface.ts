// FORMA DE OBTER THUMBNAIL DO YOUTUBE :
//  https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
//  é só trocar o VIDEO_ID pela URL do video
 

export interface video {
    title: string,
    src: string,
    description: string,
    otherVideos: listaVideos[]
}

export type listaVideos = [
    key: string,
    {title: string,
    src: string,
    thumbnail:string
    description: string
}] 

export const dadosVideos: listaVideos[] = [

    [ "1",
     {
         title: "video 1",
         src: "https://www.youtube.com/live/jfKfPfyJRdk?si=zdhokeKue6Qim8Oj",
         thumbnail: "https://img.youtube.com/vi/jfKfPfyJRdk/maxresdefault.jpg",
         description: "maining essentially unchanged. "
     }],
     ["2",
     {
         title: "video 2",
         src: "https://www.youtube.com/embed/idrbwnWLJ7w?si=a0Ta6l9HCGVcVumP",
        thumbnail: "https://img.youtube.com/vi/idrbwnWLJ7w/maxresdefault.jpg",
        description: "maining essentially unchanged. It was "
     }],
     ["3",
     {
         title: "video 3",
         src: "https://www.youtube.com/embed/ly36kn0ug4k?si=U0ZPBtZGmkklq7nc",
         thumbnail:"https://img.youtube.com/vi/ly36kn0ug4k/maxresdefault.jpg",
         description: "maining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
     }]
     // ...mais videos


]

export const dadosMainVideos: video = 
{
        title: "Vídeo Principal",
        src: "https://www.youtube.com/embed/hOJ76cZEt08?si=536ciynH4j_coE0K",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        otherVideos: dadosVideos
    }