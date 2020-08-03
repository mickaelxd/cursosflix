import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const InitialValues = {
    title: '',
    description: '',
  };
  const { values, clearForm, handleChange } = useForm(InitialValues);
  const [categorias, setCategorias] = useState([]);

  // useEffect(() => {
  //   setCategorias([
  //     ...categorias,
  //   ]);
  //   console.log('Loading Complete : ', categorias);
  // }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, values]);
    // console.log('Adicionada a categoria: ', values);
    clearForm();
  }

  return (
    <PageDefault>
      <h1>
        {`Cadastro de Categoria: ${values.title}`}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="text"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <Button style={{ background: '#2b2b2b' }}>
          Cadastrar
        </Button>

      </form>

      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.title}>
            {categoria.title}
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
