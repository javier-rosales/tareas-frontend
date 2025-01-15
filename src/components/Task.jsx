const Task = ({ id, title, description, state, createdAt }) => {
  return (
    <div className='grid gap-2 bg-[#f2f2f2] p-2 md:p-5 text-sm'>
      <span className='font-medium'>
        {id}
      </span>
      <span className='font-medium'>
        {title}
      </span>
      <span>
        {description}
      </span>
      <span>
        {state}
      </span>
      <span>
        {createdAt}
      </span>
      <div className='flex flex-col gap-2'>
        <button className='bg-blue-500 text-white px-2 py-1 rounded'>
          Editar
        </button>
        <button className='bg-red-500 text-white px-2 py-1 rounded'>
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Task