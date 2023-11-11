import { View } from "react-native";
import { Text, Button } from "react-native-paper";


function ListaEventosScreen({ navigation }) {


  function handleCreateEvent() {
    navigation.navigate('cadastro-evento')
  }
  
  return (
    <View>
      <Button icon="plus" mode="contained" buttonColor="#5DB075" onPress={() => handleCreateEvent()} />
    </View>
  );
}

export default ListaEventosScreen;
