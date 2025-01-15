import { useState } from 'react'

const AddTaskForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [taskStatus, setTaskStatus] = useState('pendiente')

  return (
    <div>
      <h2 className='text-5xl font-medium mb-10'>
        Agregar tarea
      </h2>
      <div className='bg-[#f2f2f2] max-w-3xl mx-auto rounded p-4'>
        <form className='grid gap-2'>
          <label>
            Título
          </label>
          <input
            className='border p-1 rounded mb-4'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <label>
            Descripción
          </label>
          <input
            className='border p-1 rounded mb-4'
            type='email'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <label>
            Estado
          </label>
          <div className='mt-2 space-y-2'>
            {['pendiente', 'en progreso', 'completado'].map(status => (
              <label key={status} className='flex items-center'>
                <input
                  type='radio'
                  name='state'
                  value={taskStatus}
                  checked={taskStatus === status}
                  onChange={() => setTaskStatus(status)}
                  className='form-radio text-blue-600 focus:ring-blue-500'
                />
                <span className='ml-2 text-gray-700'>
                  {status[0].toUpperCase() + status.slice(1)}
                </span>
              </label>
            ))}
          </div>
          <button className='bg-[#8f8f8f] text-white mt-6 border rounded-md px-1 py-2'>
            Agregar tarea
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddTaskForm