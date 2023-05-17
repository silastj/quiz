// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import questoes from "../bancoDeQuestoes"

export default (req: any, res: any) => {
  const perguntaId = +req.query.id

  const perguntaEncontrada = questoes.filter(questao => questao.id === perguntaId)

  if(perguntaEncontrada.length === 1){
    const questaoSelecionada = perguntaEncontrada[0]
    res.status(200).json(questaoSelecionada.converterParaObjeto())
  }else{
    res.status(204).send()
  }
}

// export default (req, res) => {
//   res.status(200).json({ 
//     id: +req.query.id,
//     name: 'John Doe'
//    })
// }
