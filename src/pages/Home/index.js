import React from "react";

import dadosIniciais from '../../data/dados_iniciais.json';

import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';


function Home() {
  //Peguei essa função de aleatorizar da Github/KellyTrindade, obrigado!
  const categoria = Math.floor( ( Math.random() * dadosIniciais.categorias.length ) )
  const video = Math.floor( ( Math.random() * dadosIniciais.categorias[categoria].videos.length ) )

  return (
    <div style={{background: "#141414"}}>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[categoria].videos[video].titulo}
        url={dadosIniciais.categorias[categoria].videos[video].url}
        videoDescription={dadosIniciais.categorias[categoria].videos[video].descricao}
        banner={dadosIniciais.categorias[categoria].videos[video].banner}
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />

      <Carousel
      category={dadosIniciais.categorias[1]}
      />

      <Carousel
      category={dadosIniciais.categorias[2]}
      />

      <Carousel
      category={dadosIniciais.categorias[3]}
      />

      <Carousel
      category={dadosIniciais.categorias[4]}
      />

      <Carousel
      category={dadosIniciais.categorias[5]}
      />

      <Footer />

    </div>
  );
}

export default Home;
