import styles from './form.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  nome: string,
  email: string,
};

const Form = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
   const form =  data
   console.log('formulario ', form)
  }

  return (
    <div 
      className={styles.form}
    >
      <h1>Formulário</h1>
      
    <form onSubmit={handleSubmit(onSubmit)}>
      <input id="nome" placeholder='Digite o seu Nome' {...register("nome", { required: true })} />
      {errors.nome &&<p>Nome obrigatorio....</p>}

      <input id="email" placeholder='Digite o seu email' {...register("email", { required: true })} />
      {errors.email && <p>Email obrigatorio....</p>} 

      {!errors.email && !errors.nome &&
        <input type="submit" />
      }
    </form>
    </div>  
  )
}

export default Form