import React from 'react';
import { useParams } from 'react-router-dom';

const videoData = {
  pulso: {
    videoUrl: 'https://www.youtube.com/embed/video-pulso',
    description: 'Descrição do vídeo para Pulso. (vídeo ficará indisponível, mas é só um placeholder)'
  },
  articulacoes: {
    videoUrl: 'https://www.youtube.com/embed/video-articulacoes',
    description: 'Descrição do vídeo para Articulações. (vídeo ficará indisponível, mas é só um placeholder)'
  },
  antiEstresse: {
    videoUrl: 'https://www.youtube.com/embed/video-anti-estresse',
    description: 'Descrição do vídeo para Anti-estresse. (vídeo ficará indisponível, mas é só um placeholder)'
  }
};

function ExerciseGuidePage() {
  const { id } = useParams();
  const video = videoData[id];

  if (!video) {
    return <div>Vídeo não encontrado</div>;
  }

  return (
    <div className='page-container'>
      <iframe width="560" height="315" src={video.videoUrl} title="YouTube video" allowFullScreen></iframe>
      <p>{video.description}</p>
    </div>
  );
}

export default ExerciseGuidePage;
