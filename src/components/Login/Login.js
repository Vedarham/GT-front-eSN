import React from 'react'
import { useForm } from "react-hook-form"
import "./Login.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {
  let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors, isSubmitting },
      } = useForm()
      // const delay = (d)=>{
      //   return new Promise((res,rej)=>{
      //     setTimeout(()=>{
      //       res()
      //     },d*1000)
      //   })
      // }
      const onSubmit = async(data) => {
        const res = await fetch('http://localhost:8080/api/auth/login', {method:"POST",headers:{
          "Content-Type":"application/json",
        }, body: JSON.stringify(data)})
        console.log(res.status)
        if(res.status === 201 || res.status===200){
          navigate('/profile')
        }else{
          navigate('/login')
        }
        
      }
    
      return (
        <>
        <div className='sign-cont'>
        <form className='sign-form'  onSubmit={handleSubmit(onSubmit)}>
        <div className='sign-details'>
          <h2>Sign IN</h2>
          <h5>Welcome Back, Champ!</h5>
        </div>
          <input defaultValue="abc@mail.com" {...register("email",  {required:{value : true, message:"*email field is required"}})} type='email' placeholder='email'/>
          {errors.email && <span className='err-txt'>{errors.email.message}</span>}
          <input {...register("password", { required: {value : true, message:"*password field is required"}, minLength:{value: 8, message: "Min. 8 characters required"} })} type='password' placeholder='password' />
          {errors.password && <span className='err-txt'>{errors.password.message}</span>}
          <input disabled={isSubmitting} className='btn-submit' type="submit" />
          {isSubmitting && <div className='err-txt'>Loading...</div>}
        </form>
        </div>
        </>
        )
}

export default Login