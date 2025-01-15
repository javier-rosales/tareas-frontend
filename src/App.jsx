import Login from './components/Login'
import TasksSection from './components/TasksSection'
import AddTaskForm from './components/AddTaskForm'
import UpdateTaskForm from './components/UpdateTaskForm'

const App = () => {
  return (
    <div>
      <Login />
      <TasksSection />
      <AddTaskForm />
      <UpdateTaskForm
        id='2'
        title='Actualizar catálogo'
        description='Añadir nuevos productos al sistema.'
        taskStatus='en progreso'
      />
    </div>
  )
}

export default App
