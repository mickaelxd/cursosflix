import React, { useState, useEffect } from 'react';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const InitialValues = {
    name: '',
    description: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(InitialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  useEffect(() => {
    const URL_BACKEND = 'http://localhost:3333/categorias';
    fetch(URL_BACKEND)
      .then(async (response) => {
        const data = await response.json();
        setCategorias([
          ...data,
        ]);
        console.log('Loading Complete : ', data);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    console.log('Adicionada a categoria: ', values);

    setCategorias([...categorias, values]);
    setValues(InitialValues);
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.name}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
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
          <li key={categoria.name}>
            {categoria.name}
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
