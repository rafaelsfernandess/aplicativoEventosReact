import { View } from "react-native";
import { Text, Button, Divider } from "react-native-paper";

import styles from './styles'
import { ScrollView } from "react-native";

function CardEvents({ titulo, horarioInicio, horarioTermino, id, descricao, navigation }) {

    return (
        <View style={styles.borda}>
            <View style={styles.container}>

                <View style={styles.titulos}>
                    <Text variant="labelLarge">{titulo}</Text>
                    <Text variant="labelSmall">Das {horarioInicio} até {horarioTermino}</Text>
                </View>

                <View style={styles.containerButtons}>
                <Button style={styles.button}
                        onPress={() =>
                            navigation.navigate('editar-evento', {
                                titulo,
                                horarioInicio,
                                horarioTermino,
                                descricao,
                                id
                            })
                        }>
                        <Text style={{ color: '#E9AF63' }}>Editar</Text>
                    </Button>
                    <Button style={styles.button}
                        onPress={() =>
                            navigation.navigate('evento', {
                                titulo,
                                horarioInicio,
                                horarioTermino,
                                descricao,
                                id

                            })
                        }>
                        <Text style={{ color: '#5DB075', }}>visualizar</Text>
                    </Button>



                </View>

                <Divider />

            </View>
        </View>

    );
}

export default CardEvents;
