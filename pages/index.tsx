import Questao from '../components/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

export default function Home() {
  const questaoTeste = new QuestaoModel(1, "Melhor cor?", [
    RespostaModel.errada('Verde'),
    RespostaModel.errada('Pink'),
    RespostaModel.errada('Azul'),
    RespostaModel.certa('Preta'),
  ])
  return (
   <div>
    <Questao valor={questaoTeste}/>
    </div>
  )
}
