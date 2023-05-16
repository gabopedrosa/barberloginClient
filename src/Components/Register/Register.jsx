import React, { useState } from 'react'
import './Register.css'
import '../../App.css'
import { Link } from 'react-router-dom'


// Assets
import video from '../../LoginAssets/video2.mp4'
import logo from '../../LoginAssets/logo.png'

// Icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'

const Register = () => {
  
    // Back-End cadastro Usuário
    const [formData, setFormData] = useState({
    email:'',
    username:'',
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



  // Front-End
  return (
    <div className='registerPage flex'>
    <div className='container flex'> 


      <div className="videoDiv">
        <video src={video} autoPlay muted loop></video>
        
        <div className="textDivRegister">
          <h2 className='title'>Sua barbearia com o melhor atendimento</h2>
          <p>Cadastre-se já</p>
        </div>

        <div className="footerDiv flex">
          <span className='text'>Já possui cadastro?</span>
          <Link to={'/'}>
          <button className='btn'>Tela Inicial</button>
          </Link>
      </div>
      </div>

      <div className="formDiv flex">
        <div className="headerDiv">
          <img src={logo} alt="Logo IMG" />
          <h3>Cadastre-se agora</h3>
        </div>


        <form action='' className='form grid'>
        <div className="inputDiv">
            <label htmlFor='email'>Email</label>
            <div className="input flex">
              <MdMarkEmailRead className="icon" />
              <input 
                type='email' 
                id='email' 
                placeholder='Seu Email'
                onChange={handleChange} 
              />
            </div> 
          </div>


          <div className="inputDiv">
            <label htmlFor='username'>Usuário</label>
            <div className="input flex">
              <FaUserShield className="icon" />
              <input 
                type='text' 
                id='username' 
                placeholder='Seu Username'
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
            <span>Concluir Registro</span>
            <AiOutlineArrowRight className="icon" />
          </button>

        </form>
      </div>


    </div>
    </div>
  )
}

export default Register