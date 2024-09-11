import './Form.css'
import TextField from "../TextField";
import DropdownList from '../DropdownList';
import Button from '../Button';

const Form = () => {

  const times = [
    'Programação',
    'Front-end',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ]

  const onSave = (event) => {
    event.preventDefault()
    console.log('Submetido')
  }

  return (
    <section className='form'>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField required={true} label="Nome" placeholder="Digite seu nome" />
        <TextField required={true} label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
        <DropdownList required={true} label="Time" items={times}/>
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  )
}

export default Form
