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

  useEffect(()=>{
    const atualizarListaEventos = async () => {
      try {
        const eventosString = await AsyncStorage.getItem('eventos');
        if (eventosString) {
          const eventosRecuperados = JSON.parse(eventosString);
          console.log(eventosRecuperados)

          setEventos(eventosRecuperados);
        } else {
          console.log('Nenhum evento encontrado no AsyncStorage');
        }
      } catch (error) {
        console.error('Erro ao atualizar a lista de eventos:', error);
      }
    };atualizarListaEventos()
  },[])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const atualizarListaEventos = async () => {
        try {
          const eventosString = await AsyncStorage.getItem('eventos');
          if (eventosString) {
            const eventosRecuperados = JSON.parse(eventosString);
            console.log(eventosRecuperados)
  
            setEventos(eventosRecuperados);
          } else {
            console.log('Nenhum evento encontrado no AsyncStorage');
          }
        } catch (error) {
          console.error('Erro ao atualizar a lista de eventos:', error);
        }
      };atualizarListaEventos()
    });
  
    return unsubscribe;
  }, [navigation]);
  

  return (
    <View style={styles.container}>
      {eventos.length > 0 ? (
        <ScrollView>
          {eventos.map(evento => (
            <CardEvents
              key={evento.id}
              titulo={evento.titulo}
              horarioInicio={evento.hInicio}
              horarioTermino={evento.hTermino}
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
        }}
      />
    </View>
  );
}

export default ListaEventosScreen;
