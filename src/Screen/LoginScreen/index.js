import { useState } from "react";
import { View } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './styles'
import { ScrollView } from "react-native";

function LoginScreen({ navigation }) {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    function handleLogin() {
        navigation.navigate('lista-eventos')
    }
    function handleCreateUser() {
        navigation.navigate('cadastro-usuario')
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text variant="displayMedium" style={styles.title}>Cadastre-se</Text>
            </View>
            <View style={styles.containerInputs}>
                <ScrollView>
                    <View style={styles.teste}>
                        <TextInput
                            mode='outlined'
                            label="Email"
                            value={nome}
                            onChangeText={text => setNome(text)}
                        />
                        <TextInput
                            mode='outlined'
                            label="Senha"
                            value={nome}
                            onChangeText={text => setNome(text)}
                        />

                    </View>
                </ScrollView>
            </View>
            <View style={styles.containerButton}>
                <View style={styles.buttons}>
                    <Button style={styles.button} mode="contained" buttonColor="#5DB075" onPress={() => handleLogin()}>
                        <Text style={styles.buttonTextWhite}>Entrar</Text>
                    </Button>
                    <Button mode="text" style={styles.button} textColor="#5DB075" onPress={() => handleCreateUser()}>
                        <Text style={styles.buttonTextGreen}>Cadastre-se</Text>
                    </Button>
                </View>
            </View>
        </View>


    );
}

export default LoginScreen;

