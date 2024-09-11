import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from './components/Footer'

function App() {

  const teams = [
    {
      name: 'Programação',
      primary: '#57c278',
      secondary: '#d9f7e9'
    },
    {
      name: 'Front-end',
      primary: '#82CFFA',
      secondary: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primary: '#A6D157',
      secondary: '#F0F8E2'
    },
    {
      name: 'Devops',
      primary: '#E06B69',
      secondary: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primary: '#DB6EBF',
      secondary: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primary: '#FFBA05',
      secondary: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primary: '#FF8A29',
      secondary: '#FFEEDF'
    },
  ]

  const [employees, setEmployees] = useState([])

  const whenNewEmployee = (employee) => {
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map(team => team.name)}
        whenEmployeeAdded={employee => whenNewEmployee(employee)}
      />

      {teams.map((team) => (
        <Team 
          key={team.name} 
          name={team.name} 
          primary={team.primary} 
          secondary={team.secondary} 
          employees={employees.filter(employee => employee.team === team.name)}
        />
      ))}
      <Footer />
      </div>
  );
}

export default App;
