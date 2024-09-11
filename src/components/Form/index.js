import './Form.css'
import TextField from "../TextField";
import DropdownList from '../DropdownList';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {

  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')

  const onSave = (event) => {
    event.preventDefault()
    props.whenEmployeeAdded({
      name,
      position,
      image,
      team
    })
    setName('')
    setPosition('')
    setImage('')
    setTeam('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          whenChanged={value => setName(value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={position}
          whenChanged={value => setPosition(value)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          whenChanged={value => setImage(value)}
        />
        <DropdownList
          required={true}
          label="Time"
          items={props.teams}
          value={team}
          whenChanged={value => setTeam(value)}
        />
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  )
}

export default Form
