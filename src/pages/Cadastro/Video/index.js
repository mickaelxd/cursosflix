import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitle = categorias.map(({ title }) => title);
  // console.log('categoryTitle', categoryTitle);
  const { handleChange, values } = useForm({
    title: '',
    url: '',
    categories: '',
  });

  useEffect(() => {
    categoriesRepository
      .getCategories()
      .then((serverCategories) => {
        setCategorias(serverCategories);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={function insertVideo(e) {
        e.preventDefault();

        const choosedCategoria = categorias.find(
          (categoria) => categoria.titulo === values.categoria,
        );

        // console.log(choosedCategoria);

        videosRepository.create({
          title: values.title,
          url: values.url,
          categoriaId: choosedCategoria.id,
        }).then(() => {
          // console.log('Video Cadastrado');
          history.push('/');
        });
      }}
      >
        <FormField
          label="Titulo do Video"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categories"
          value={values.categories}
          onChange={handleChange}
          suggestions={categoryTitle}
        />

        <Button style={{ background: '#2b2b2b' }}>
          Cadastrar Video
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Nova Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
