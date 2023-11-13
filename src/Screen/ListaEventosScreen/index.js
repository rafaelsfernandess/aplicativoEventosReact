import { ScrollView, View, Text } from "react-native";
import { FAB } from "react-native-paper";

import CardEvents from "../../components/Events";

import styles from './styles';
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function ListaEventosScreen({ navigation }) {
  const [eventos, setEventos] = useState([]);

  function handleCreateEvent() {
    navigation.navigate('cadastro-evento');
  }

 
  // Esta função será chamada sempre que um novo evento for criado
  const atualizarListaEventos = async () => {
    try {
      const eventosString = await AsyncStorage.getItem('eventos');
      if (eventosString) {
        const eventosRecuperados = JSON.parse(eventosString);
        setEventos(eventosRecuperados);
      } else {
        console.log('Nenhum evento encontrado no AsyncStorage');
      }
    } catch (error) {
      console.error('Erro ao atualizar a lista de eventos:', error);
    }
  };
  atualizarListaEventos()

  return (
    <View style={styles.container}>
      {eventos.length > 0 ? (
        <ScrollView>
          {eventos.map(evento => (
            <CardEvents
              key={evento.id}
              titulo={evento.titulo}
              horarioInicio={evento.horarioInicio}
              horarioTermino={evento.horarioTermino}
              id={evento.id}
              descricao={evento.descricao}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      ) : (
        <Text>Nenhum evento disponível no momento.</Text>
      )}
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => {
          handleCreateEvent();
          atualizarListaEventos(); // Atualiza a lista após criar um novo evento
        }}
      />
    </View>
  );
}

export default ListaEventosScreen;
