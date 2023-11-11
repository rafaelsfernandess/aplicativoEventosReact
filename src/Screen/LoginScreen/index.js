import { useState } from "react";
import { View } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './styles'

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
                <Text variant="displayMedium" style={styles.title}>Bem vindo</Text>
            </View>
            <View style={styles.containerInputs}>
                <TextInput
                    label="Email"
                    value={nome}
                    onChangeText={text => setNome(text)}
                />
                <TextInput
                    label="Senha"
                    value={nome}
                    onChangeText={text => setNome(text)}
                />
                <View style={ styles.containerButton }> 
                    <Button icon="login" mode="contained" buttonColor="#5DB075" onPress={() => handleLogin()}>
                        Entrar
                    </Button>
                </View>
                <View style={ styles.containerButton }> 
                    <Button icon="content-save" mode="contained" buttonColor="transparent" textColor="#5DB075" onPress={() => handleCreateUser()}>
                        Cadastre-se
                    </Button>
                </View>
            </View>
        </View>


    );
}

export default LoginScreen;

