import { Embaralhar } from "../utils/embaralhar"
import RespostaModel from "./resposta"

export default class QuestaoModel {
  #id: number
  #enunciado: string
  #respostas: RespostaModel[]
  #acertou: boolean

  constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou: boolean){
    this.#id = id
    this.#enunciado = enunciado
    this.#respostas= respostas
    this.#acertou = acertou
  }

  get id(){
    return this.#id
  }
  get enunciado(){
    return this.#enunciado
  }
  get respostas(){
    return this.#respostas
  }
  get acertou(){
    return this.#acertou
  }
  get respondida(){
      for(let resposta of this.#respostas){
        console.log(resposta)
        if(resposta.revelada) return true
      }
    return false
  }

  responderCom(indice: number): QuestaoModel{
    const acertou = this.#respostas[indice]?.certa
    const respostas = this.#respostas.map((resposta, i) => {
      const respostaSelecionada = indice === i
      const deveRevelar = respostaSelecionada || resposta?.certa
      return deveRevelar ? resposta.revelar() : resposta
    })
    return new QuestaoModel(this.#id, this.enunciado, respostas, acertou)

  }

  embaralharRespostas(){
    let respostaEmbalharadas = Embaralhar(this.#respostas)
    return new QuestaoModel(this.#id, this.#enunciado, respostaEmbalharadas, this.#acertou)
  }

  converterParaObjeto(){
    return{
      id: this.#id,
      enunciado: this.#enunciado,
      acertou: this.#acertou,
      respondida: this.respondida,
      resposta: this.#respostas.map(res => res.converterParaObjeto())
    }
  }
}