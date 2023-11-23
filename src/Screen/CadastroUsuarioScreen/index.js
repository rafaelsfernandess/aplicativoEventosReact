import { useState } from "react";
import { Alert, View } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ScrollView } from "react-native";

import styles from './styles'

function CadastroUsuarioScreen({ navigation }) {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    async function handleSaveUser() {
        try {
            const usuariosArmazenados = await AsyncStorage.getItem('usuarios');
            const usuarios = usuariosArmazenados ? JSON.parse(usuariosArmazenados) : [];

            const novoUsuario = {
                id: usuarios.length + 1,
                nome,
                email,
                senha
            };

            usuarios.push(novoUsuario);

            await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios));

            setNome()
            setEmail()
            setSenha()
            Alert.alert('Usuário salvo com sucesso')
            navigation.navigate('login')
        } catch (error) {
            alert('Erro ao salvar usuário')
            console.error('Erro ao salvar usuario:', error);
        }
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
                            label="Nome Completo"
                            value={nome}
                            onChangeText={text => setNome(text)}
                        />
                        <TextInput
                            mode='outlined'
                            label="Email"
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                        <TextInput
                            mode='outlined'
                            label="Senha"
                            value={senha}
                            onChangeText={text => setSenha(text)}
                        />
                        <TextInput
                            mode='outlined'
                            label="Confirmar Senha"
                            value={confirmarSenha}
                            onChangeText={text => setConfirmarSenha(text)}
                        />

                    </View>
                </ScrollView>
            </View>
            <View style={styles.containerButton}>
                <View style={styles.buttons}>
                    <Button style={styles.button} mode="contained" buttonColor="#5DB075" onPress={() => handleSaveUser()}>
                        <Text style={styles.buttonTextWhite}>Entrar</Text>
                    </Button>
                </View>
            </View>
        </View>


    );
}

export default CadastroUsuarioScreen;

