import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <h2 className='text-5xl font-medium mb-10'>
        Iniciar sesión
      </h2>
      <div className='bg-[#f2f2f2] max-w-3xl mx-auto rounded p-4'>
        <form className='grid gap-2'>
          <label>
            Correo electrónico
          </label>
          <input
            className='border p-1 rounded mb-4'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label>
            Contraseña
          </label>
          <input
            className='border p-1 rounded-sm'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className='bg-[#8f8f8f] text-white mt-6 border rounded-md px-1 py-2'>
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login