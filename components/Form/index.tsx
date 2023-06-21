import { useEffect, useState, useRef } from 'react';
import styles from './form.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'

import {userCollectionRef, db} from '../../src/firebase-config'
import { getDocs, addDoc, collection } from 'firebase/firestore';

import ReCAPTCHA from "react-google-recaptcha";

type Inputs = {
  name: string,
  email: string,
  age: number,
};

type MyData = {
  age: number;
  name: string;
  email: string;
  id: string;
}

type Recaptcha = {
  siteKey: string
}

const Form: React.FC<Recaptcha> = () => {
  const [users, setUsers] = useState<MyData[]>([])
  const [success, setSucess] = useState<boolean>(false)
  const age = 14
  const captcha = useRef<ReCAPTCHA>(null)
  const [recaptcha, setRecaptcha] = useState(false)




  const { register, handleSubmit,watch, reset, setFocus, formState: { errors } } = useForm<Inputs>();
  const watchFields: number = watch("age") !== undefined ? watch('age') : 0
  const onSubmit: SubmitHandler<Inputs> = data => {
  createUser(data)
  setSucess(true)    
  reset();
  setTimeout(() => {    
    setSucess(false)    
    data.name = ''
    data.email = ''
    data.age = age
    setFocus("name")
    captcha.current.reset()
  }, 5000);
  }
  console.log(users)
  //criar o user
  async function createUser(data: Inputs ) {
    const userCollectionRef = collection(db, "clients")
    await addDoc(userCollectionRef, {
      name: data.name,
      email: data.email,
      age: data.age
    })
  }

  useEffect(() => {
    //pegar o user
    (async () => {
      const response = await getDocs(userCollectionRef)
      const newDados: any = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
      // const newDados: any = response.docs.map((doc) => (doc?.createTime))
      console.log('newDados', newDados)
      setUsers(newDados)
    })()
    setFocus("name")
  }, [])
 console.log('watchFields ',typeof +watchFields)

 function onRecaptcha(value: string) {
  value.length > 0 ? setRecaptcha(true) : setRecaptcha(false)
  
}
  return (
    <div
      className={styles.form}
    >
      <h1>Formulário de Usuários: </h1>
      {users && users.map((user, index) => (
      <>
        <p key={index}>{user.name}</p>
        <p>{user.age}</p>
        <p>{user.email}</p>
        <strong>---</strong>
      </>
      ))}
      {/* <form className={styles.formHook}>
        <label>Nome:</label>
        <input id="name" type="text" placeholder='Digite o seu Nome' value={name} onChange={(e) => setName(e.target.value)} />

        <label>E-mail:</label>
        <input id="email" type="text" placeholder='Digite o seu email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        {name.length > 0 && email.length > 0 &&
          <button onClick={createUser}>Create User</button>
        }
        {success && 
          <p className={styles.sucess}>Enviado com Sucesso!!!!</p>
        }
      </form> */}
     
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formHook} action="javascript:grecaptcha.reset()">
      {success && 
          <p className={styles.sucess}>Enviado com Sucesso!!!!</p>
        }
         <label>Nome:</label>
        <input id="name" placeholder='Digite o seu Nome' {...register("name", { required: true })} />
        {errors.name && <p className={styles.error}>Nome obrigatorio....</p>}

         <label>Idade:</label>
        <input type="number" placeholder='Digite a sua Idade' {...register("age", { min: age, max: 99 })} />
        {+watchFields !== 0 && +watchFields < age && <p className={styles.error}>Você precisa ser maior que 14 anos.</p>}

        <label>E-mail:</label>
        <input id="email" placeholder='Digite o seu email' {...register("email", {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'E-mail inválido'
          }
        })} />
        {errors.email && <p className={styles.error}>Email obrigatorio....</p>}
        {/* <input type="file"/>
        {!imgUrl && <progress value={progress} max="100" />}
        {imgUrl && <img src={imgUrl} alt={dados.nome}/>} */}
        <div className={styles.recaptcha}>
        <ReCAPTCHA
          ref={captcha}
          sitekey='6LdWZqwmAAAAAKsncTz1lphml7epjQKpiZY8L_hN'
          onChange={onRecaptcha}
        />
        </div>
        {!errors.email && !errors.name && watchFields >= age && recaptcha &&
          <input type="submit" />
        }
      </form>
      {/* {!errors.nome && !errors.email && !errors.age && dados.nome && dados.email &&
        <p>Cadastrado na newslestter: nome:<strong>{dados.nome}</strong> idade: <strong>{dados.age} </strong> email: <strong>{dados.email}</strong></p>
      } */}
    </div>
  )
}

export default Form