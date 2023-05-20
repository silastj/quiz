import styles from './enunciado.module.css'

interface EnunciadoProps {
  texto: string
}
const Enunciado = ({texto}: EnunciadoProps) => {
  return (
    <div className={styles.enunciado}>
      <div>
        {texto}
      </div>
    </div>
  )
}

export default Enunciado