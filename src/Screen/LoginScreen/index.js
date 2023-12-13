import { useState } from "react";
import { Alert, View } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from './styles'
import { ScrollView } from "react-native";

function LoginScreen({ navigation }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    const getStoredData = async () => {
        try {
            const data = await AsyncStorage.getItem('usuarios');
            if (data !== null) {
                return JSON.parse(data);
            }
            return []; // Retorna um array vazio se não houver dados salvos
        } catch (error) {
            console.error('Erro ao recuperar os dados do AsyncStorage:', error);
            return [];
        }
    };

    const handleLogin = async () => {
        const userData = await getStoredData();

        const user = userData.find(user => user.email === email && user.senha === senha);

        if (user) {
            Alert.alert('Login realizado com sucesso!');
            navigation.navigate('lista-eventos')

        } else {
            Alert.alert('E-mail ou senha incorretos. Tente novamente.');
        }
    };


    function handleCreateUser() {
        navigation.navigate('cadastro-usuario')
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text variant="displayMedium" style={styles.title}>Login</Text>
            </View>
            <View style={styles.containerInputs}>
                <ScrollView>
                    <View style={styles.teste}>
                        <TextInput
                            mode='outlined'
                            label="Email"
                            value={email}
                            autoCapitalize='none'

                            onChangeText={text => setEmail(text)}
                        />
                        <TextInput
                            mode='outlined'
                            label="Senha"
                            value={senha}
                            autoCapitalize='none'
                            secureTextEntry={true}
                            onChangeText={text => setSenha(text)}
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

