import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";


const questoes: QuestaoModel[] = [
  new QuestaoModel(306, 'Qual bicho transmite a Doença de Chagas?', [
    RespostaModel.errada('Abelha'),
    RespostaModel.errada('Pulga'),
    RespostaModel.errada('Barata'),
    RespostaModel.certa('Barbeiro'),
  ]),
  new QuestaoModel(202, 'Qual é o fruto conhecido no Norte e Nordeste como [Jerimum] ?', [
    RespostaModel.errada('Caju'),
    RespostaModel.errada('Cocô'),
    RespostaModel.errada('Chuxu'),
    RespostaModel.certa('Abóbora'),
  ])
]

export default questoes