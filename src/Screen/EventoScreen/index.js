import { useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import styles from './styles'


function EventoScreen({ route }) {

  const titulo = route.params.titulo
  const dataHora = route.params.dataHora
  const descricao = route.params.descricao
  const id = route.params.id

  return (
    <View style={styles.container}>

      <Text style={{ textAlign: 'center', padding: 30, fontWeight: 'bold' }} variant="titleLarge">
        {titulo}
      </Text>

      <View s>

        <Text style={{ textAlign: 'center', fontWeight: 'bold' }} variant="bodyLarge">
          Período
        </Text>
        <Text style={{ textAlign: 'center' }} variant="bodyLarge">
          {dataHora}
        </Text>

      </View>

      <View style={{ paddingTop: 30 }} >
        <Text style={{ textAlign: 'center', fontWeight: 'bold' }} variant="bodyLarge">
          Descrição
        </Text>
        <Text style={{ textAlign: 'justify', margin: 10 }} variant="bodyLarge">
          {descricao}
        </Text>
      </View>

    </View>
  );
}

export default EventoScreen;
