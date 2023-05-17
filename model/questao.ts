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

  converterParaObjeto(){
    return{
      id: this.#id,
      enunciado: this.#enunciado,
      resposta: this.#respostas.map(res => res.converterParaObjeto()),
      acertou: this.#acertou
    }
  }
}