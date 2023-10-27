import { useState, useEffect } from 'react'
import RegistrationForm from '../utils/RegistrationForm'

const RegistrationPage = () => {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    document.title = 'Register | Upcoming Seminar'
  }, [])
  
  const handleSubmit = (formData) => {
    setLoading(true)
    const url = 'https://winsmart-academy.onrender.com/api/register/'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      setLoading(false)
      setMessage('Registration Successful check your email')
      alert('Registration Successful check your email')
    }).catch(err => {
      alert("Couldn't reach server")
      setLoading(false)
    })
  }
  
  return (
      <div className="max-w-3xl h-full bg-white backdrop-blur-3xl mt-15 flex flex-col mx-auto px-2">
        <h1 className="text-2xl text-blue-600 mb-3 text-center font-semibold">Deriv Seminar Registraion</h1>
        <p className="text-gray-400 text-sm text-center font-mono">Register for the upcoming seminar </p>
        
        <RegistrationForm submit={handleSubmit} loading={loading} />
      </div>
  )
}

export default RegistrationPage
