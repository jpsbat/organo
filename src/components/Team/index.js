import Employee from '../Employee'
import './Team.css'

const Team = (props) => {
  const background = { backgroundColor: props.secondary }
  const border = { borderColor: props.primary }

  return (
    (props.employees.length > 0) ? <section className='team' style={background}>
      <h3 style={border}>{props.name}</h3>
      <div className='employees'>
        {props.employees.map(employee =>
          <Employee
            name={employee.name}
            position={employee.position}
            image={employee.image}
          />
        )}
      </div>
    </section>
    : ''
  )
}

export default Team