import Task from './Task'

const Tasks = ({ tasks }) => {
  return (
    <div className='grid md:grid-cols-2 gap-px max-w-5xl mx-auto bg-[#c9c9c9] border rounded overflow-auto border-[#c9c9c9]'>
      {tasks.map(({ id, ...task}) =>
        <Task key={id} id={id} {...task} />
      )}
    </div>
  )
}

export default Tasks