import React, { useEffect, useState } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getVideos()
      .then((CategoriesWithVideos) => {
        setInitialData(CategoriesWithVideos);
        console.log('videos', CategoriesWithVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {initialData.length === 0 && (<div> Loading... </div>)}

      {initialData.map((category, index) => {
        if (index === 0) {
          // Peguei essa função de aleatorizar da Github/KellyTrindade, obrigado!
          const maxCategory = Math.floor((Math.random() * initialData.length));
          const maxVideo = Math.floor((Math.random() * initialData[maxCategory].videos.length));

          return (
            <React.Fragment key={category.id}>

              <BannerMain
                videoTitle={initialData[maxCategory].videos[maxVideo].title}
                url={initialData[maxCategory].videos[maxVideo].url}
                videoDescription={initialData[maxCategory].videos[maxVideo].descricao}
                banner={initialData[maxCategory].videos[maxVideo].banner}
              />

              <Carousel
                category={initialData[0]}
              />
            </React.Fragment>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={initialData[category.index]}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
