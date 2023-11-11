import { ScrollView, View } from "react-native";
import { FAB, Card, Avatar, IconButton } from "react-native-paper";

import CardEvents from "../../components/Events";

import styles from './styles'

function ListaEventosScreen({ navigation }) {


  function handleCreateEvent() {
    navigation.navigate('cadastro-evento')
  }

  const data = [{
    1: {
      id: 1,
      titulo: "Trilha da Serenidade",
      dataHora: "10/05/2024 - 09:00 as 12:00",
      descricao: "Descubra a calmaria em meio à natureza, um passeio revigorante para começar bem o dia."
    },
    2: {
      id: 2,
      titulo: "Trilha das Águias",
      dataHora: "15/06/2024 - 08:30 as 11:30",
      descricao: "Uma aventura entre alturas, onde é possível contemplar a beleza dos céus e sentir a liberdade voando alto."
    },
    3: {
      id: 3,
      titulo: "Trilha da Floresta Encantada",
      dataHora: "22/07/2024 - 10:00 as 13:00",
      descricao: "Explore uma floresta cheia de mistérios e beleza, onde a natureza revela seu encanto."
    },
    4: {
      id: 4,
      titulo: "Trilha do Cânion Solitário",
      dataHora: "03/08/2024 - 07:45 as 10:45",
      descricao: "Adentre um cânion remoto e descubra a imponência das rochas e a solidão serena do local."
    },
    5: {
      id: 5,
      titulo: "Trilha das Cachoeiras Ocultas",
      dataHora: "18/09/2024 - 09:30 as 12:30",
      descricao: "Um percurso surpreendente entre diversas cachoeiras, um espetáculo escondido na natureza."
    },
    6: {
      id: 6,
      titulo: "Trilha das Ruínas Antigas",
      dataHora: "07/10/2024 - 10:15 as 13:15",
      descricao: "Explore sítios arqueológicos e desvende os segredos das civilizações passadas."
    },
    7: {
      id: 7,
      titulo: "Trilha do Pôr do Sol Dourado",
      dataHora: "25/11/2024 - 16:00 as 19:00",
      descricao: "Contemple um pôr do sol inesquecível, onde as cores pintam o céu de tons dourados."
    },
    8: {
      id: 8,
      titulo: "Trilha da Nascente Cristalina",
      dataHora: "12/12/2024 - 11:45 as 14:45",
      descricao: "Siga o curso de uma nascente de água pura e cristalina, uma jornada de renovação e frescor."
    },
    9: {
      id: 9,
      titulo: "Trilha do Vale Esquecido",
      dataHora: "29/01/2025 - 08:00 as 11:00",
      descricao: "Adentre um vale remoto e descubra um refúgio natural intocado pelo tempo."
    },
    10: {
      id: 10,
      titulo: "Trilha do Desfiladeiro Ventoso",
      dataHora: "14/02/2025 - 10:30 as 13:30",
      descricao: "Uma jornada por um desfiladeiro ventoso, onde a força da natureza se faz presente."
    },
    11: {
      id: 11,
      titulo: "Trilha da Montanha Solitária",
      dataHora: "03/03/2025 - 09:45 as 12:45",
      descricao: "Explore uma montanha imponente e descubra a serenidade das alturas."
    },
    12: {
      id: 12,
      titulo: "Trilha do Bosque Silencioso",
      dataHora: "20/04/2025 - 08:15 as 11:15",
      descricao: "Caminhe por um bosque tranquilo, onde o silêncio é o verdadeiro anfitrião."
    },
    13: {
      id: 13,
      titulo: "Trilha do Lago Reflexivo",
      dataHora: "05/05/2025 - 10:00 as 13:00",
      descricao: "Contemple as águas de um lago sereno, refletindo a beleza ao seu redor."
    },
    14: {
      id: 14,
      titulo: "Trilha do Deserto Sereno",
      dataHora: "22/06/2025 - 07:30 as 10:30",
      descricao: "Explore a vastidão do deserto em uma jornada de calma e introspecção."
    },
    15: {
      id: 15,
      titulo: "Trilha do Córrego Encantado",
      dataHora: "09/07/2025 - 09:15 as 12:15",
      descricao: "Siga as margens de um córrego encantado, onde a natureza revela seu esplendor."
    },
    16: {
      id: 16,
      titulo: "Trilha das Colinas Ventosas",
      dataHora: "24/08/2025 - 11:00 as 14:00",
      descricao: "Explore colinas onde o vento sussurra segredos antigos e a paisagem é de tirar o fôlego."
    },
    17: {
      id: 17,
      titulo: "Trilha das Grutas Misteriosas",
      dataHora: "11/09/2025 - 08:45 as 11:45",
      descricao: "Adentre grutas cheias de mistério e descubra os segredos escondidos nas entranhas da terra."
    },
    18: {
      id: 18,
      titulo: "Trilha da Praia Solitária",
      dataHora: "28/10/2025 - 10:45 as 13:45",
      descricao: "Caminhe por uma praia deserta, onde a solidão se encontra com a beleza do oceano."
    },
    19: {
      id: 19,
      titulo: "Trilha do Vale da Lua Cheia",
      dataHora: "15/11/2025 - 16:30 as 19:30",
      descricao: "Explore um vale sob a luz da lua cheia, uma experiência mágica e envolvente."
    },
    20: {
      id: 20,
      titulo: "Trilha das Planícies Douradas",
      dataHora: "02/12/2025 - 08:00 as 11:00",
      descricao: "Caminhe pelas planícies douradas, onde o sol beija a terra em tons de ouro."
    },


  }]



  return (
    <View style={styles.container}>

      <ScrollView>

        {
          data.map((evento, index) => (
            Object.keys(evento).map((key) => (
              <CardEvents
                key={evento[key].id}
                titulo={evento[key].titulo}
                dataHora={evento[key].dataHora}
                id={evento[key].id}
                descricao={evento[key].descricao}
                navigation={navigation}
              />
            ))
          ))
        }

      </ScrollView>

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => handleCreateEvent()}
      />

    </View>
  );
}
export default ListaEventosScreen
