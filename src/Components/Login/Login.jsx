// Assets
import React, { useState } from 'react'
import './Login.css'
import '../../App.css'
import { Link } from 'react-router-dom'
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'
import { supabase } from '../../supabaseClient'

// Icons
import {MdEmail, MdMarkEmailRead} from 'react-icons/md'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {BiArrowToRight} from 'react-icons/bi'




const Login = () => {
  // Back-End Login Usuário
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })
  
  function handleChange(event){
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.id]: event.target.value
      }
    })
  }

  console.log(formData)
 
  async function handleSubmit(e){
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signInWithPassword(
        {
        email: formData.email,
        password: formData.password,
        })

      if (error) throw error
      console.log(data)
      alert('Logado com sucesso')

    } catch (error) {
      alert("Opa! Algo deu errado... Confira suas credenciais e tente novamente.")
      
    }
  }



  // Front-End
  return (
    <div className='loginPage flex'>
    <div className='container flex'> 

      <div className="videoDiv">
        <video src={video} autoPlay muted loop></video>
        
        <div className="textDiv">
          <h2 className='title'>Faça parte do nosso time</h2>
          <p>Estamos te esperando!</p>
        </div>

        <div className="footerDiv flex">
          <span className='text'>Não tem uma conta?</span>
          <Link to={'/register'}>
          <button className='btn'>Criar Conta</button>
          </Link>
      </div>
      </div>

      <div className="formDiv flex">
        <div className="headerDiv">
          <img src={logo} alt="Logo IMG" />
          <h3>Bem vindo de volta!</h3>
        </div>

        <form onSubmit={handleSubmit} className='form grid'>
          <span></span> 
          <div className="inputDiv">
            <label htmlFor='email'>Email</label>
            <div className="input flex">
              <MdEmail className="icon" />
              <input 
                type='text' 
                id='email' 
                placeholder='Seu Email'
                onChange={handleChange}
              />
            </div> 
          </div>


          <div className="inputDiv">
            <label htmlFor='password'>Senha</label>
            <div className="input flex">
              <BsFillShieldLockFill className="icon" />
              <input 
                type='password' 
                id='password' 
                placeholder='Sua senha'
                onChange={handleChange}
              />
            </div> 
          </div>

          <button type='submit' className='btn flex'>
            <span>Login </span>
            <BiArrowToRight className="icon" />
          </button>

          <span className='forgotPassword'>
            Esqueceu sua senha? <a href='/'>Clique aqui</a>
          </span>
          

        </form>
      </div>


    </div>
    </div>
  )
}


export default Login