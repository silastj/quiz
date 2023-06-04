import { ReactElement, ReactNode, useState } from 'react';
import styles from './form.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  nome?: string,
  email?: string,
  dados?: ReactElement
};

const Form = () => {
  const [dados, setDados] = useState<Inputs>({nome: '', email: ''})
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
   const form =  data
   setDados(form)
   alert(JSON.stringify(form))
   console.log('register', register)
   console.log('dados', dados)
  }
  return (
    <div 
      className={styles.form}
    >
      <h1>Formulário</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input id="nome" placeholder='Digite o seu Nome' {...register("nome", { required: true })} />
      {errors.nome &&<p>Nome obrigatorio....</p>}

      <input id="email" placeholder='Digite o seu email' {...register("email", { required: true,
       pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'E-mail inválido'
      } })} />
      {errors.email && <p>Email obrigatorio....</p>} 

      {!errors.email && !errors.nome && 
        <input type="submit" />
      }
    </form>
    <p>Cadastrado na newslestter: nome:<strong>{dados.nome}</strong> email: <strong>{dados.email}</strong></p>
    </div>  
  )
}

export default Form