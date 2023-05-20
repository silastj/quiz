import styles from './questao.module.css'
import QuestaoModel from "../../model/questao"
import Enunciado from './Enunciado'



interface QuestaoProps {
  valor: QuestaoModel
}


const Questao = ({valor}: QuestaoProps) => {
  const questao =  valor
  return(
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado}/>
    </div>
  )
}

export default Questao