import React from 'react';
// import { useParams } from 'react-router-dom';

import Player from '../../components/Player';

// const videoData = {
//   pulso: {
//     videoUrl: 'https://www.youtube.com/embed/video-pulso',
//     description: 'Descrição do vídeo para Pulso. (vídeo ficará indisponível, mas é só um placeholder)'
//   },
//   articulacoes: {
//     videoUrl: 'https://www.youtube.com/embed/video-articulacoes',
//     description: 'Descrição do vídeo para Articulações. (vídeo ficará indisponível, mas é só um placeholder)'
//   },
//   antiEstresse: {
//     videoUrl: 'https://www.youtube.com/embed/video-anti-estresse',
//     description: 'Descrição do vídeo para Anti-estresse. (vídeo ficará indisponível, mas é só um placeholder)'
//   }
// };

function ExerciseVideoPage() {
    //  const { area, id } = useParams();
//   const video = videoData[area];

//   if (!video) {
//     return <div>Vídeo não encontrado</div>;
//   }

  return (
    <Player type='exercicio'/>
    // <div className='page-container'>
    //   <iframe width="560" height="315" src={video.videoUrl} title="YouTube video" allowFullScreen></iframe>
    //   <p>{video.description}</p>
    // </div>
  );
}

export default ExerciseVideoPage;
