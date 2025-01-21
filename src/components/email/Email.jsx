import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Email = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    // email service ID
    const serviceId = 'service_u1zu0pj'
    const templateId = 'template_zewyppr'
    const publicKey = 'DhiH0snJ2cbpoBJ1t'

    // create obj with template parameter
    const dynaimcTemplaterParams = {
      form_name: name,
      form_email: email,
      to_name: 'Luca Caimi',
      message: message,
    }

    //send email using emailjs
    emailjs
      .send(serviceId, templateId, dynaimcTemplaterParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response)
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch((err) => {
        console.log('Somenthing went wrong', err)
      })
  }
  //
  //
  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Message</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Send" />
      </form>
    </>
  )
}

export default Email
