import { useRouter } from 'next/router'
import Questao from '../components/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Header from '../components/Head'


const Home = () => {

  const router = useRouter()
  const questaoTeste = new QuestaoModel(1, "Melhor cor?", [
    RespostaModel.errada('Verde'),
    RespostaModel.errada('Pink'),
    RespostaModel.errada('Azul'),
    RespostaModel.certa('Preta'),
  ])

  const {t} = useTranslation('common')
console.log('amós')
  return (
    <>
   <Header 
    title="Home"
   />
    <div>
     <h1>{t("welcome")}</h1>
     <Link className="login" href={'/login'}>Acessar Login</Link>
     <ul>
      {router.locales?.map((item, index) => (
        <li key={index}>
          <Link href={'/'}
          locale={item}>
            {item}</Link>
        </li>
      ))}
    </ul>
      <p>{t("phrase")}: <strong>{t("language")}</strong></p>    
      <Questao valor={questaoTeste}/>
    </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string, ['common']))
    }
  }
}
export default Home