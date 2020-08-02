import React, { useState } from 'react';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria(){

  const InitialValues = {
    name: '',
    description: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(InitialValues);

  function setValue(key, value){
    setValues({
      ...values,
      [key]: value
    })
  }

  function handleChange(e){
    setValue(
      e.target.getAttribute('name'),
      e.target.value
    )
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log('Adicionada a categoria: ', values )
    setCategorias([...categorias, values])
    setValues(InitialValues)
  }

  return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.name}</h1>

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

          <button>
            Cadastrar
          </button>

        </form>

        <ul>
          {categorias.map((categoria, index) => (
            <li key={categoria + index}>
              {categoria.name}
            </li>
          ))}
        </ul>
      </PageDefault>
  )
}

export default CadastroCategoria;