import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";


const questoes: QuestaoModel[] = [
  new QuestaoModel(300, 'Qual bicho transmite a Doença de Chagas?', [
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
  ]),
  new QuestaoModel(406, 'Qual a capital do Mato Grosso do Sul?', [
    RespostaModel.errada('Paraná'),
    RespostaModel.errada('Sergipe'),
    RespostaModel.errada('Rio'),
    RespostaModel.certa('Campo Grande'),
  ]),
  new QuestaoModel(504, 'Qual combustivel é usado no carro flex?', [
    RespostaModel.errada('Diesel'),
    RespostaModel.errada('Etanol'),
    RespostaModel.errada('Somente Gasolina'),
    RespostaModel.certa('Etanol ou Gasolina'),
  ])
]

export default questoes