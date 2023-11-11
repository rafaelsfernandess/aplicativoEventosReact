import { View } from "react-native";
import { Text, Button, Divider } from "react-native-paper";

import styles from './styles'
import { ScrollView } from "react-native";

function CardEvents({ titulo, dataHora, id, descricao, navigation }) {

    return (
        <View style={styles.borda}>
            <View style={styles.container}>

                <View style={styles.titulos}>
                    <Text variant="labelLarge">{titulo}</Text>
                    <Text variant="labelSmall">{dataHora}</Text>
                </View>
                <Button style={styles.button}
                    onPress={() =>
                        navigation.navigate('evento', {
                            titulo,
                            dataHora,
                            descricao,
                            id
                            
                        })
                    }>
                    <Text style={{ color: '#5DB075' }}>visualizar</Text>
                </Button>
                <Divider />

            </View>
        </View>

    );
}

export default CardEvents;
