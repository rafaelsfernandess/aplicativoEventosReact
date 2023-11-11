import { useState } from "react";
import { View } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './styles'

function CadastroUsuarioScreen({ navigation }) {
    
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    function handleSaveUser() {
        navigation.navigate('login')
    }

    return (

        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text variant="displayMedium" style={styles.title}>Cadastre-se</Text>
            </View>
            <View style={styles.containerInputs}>
                <TextInput
                    label="Nome Completo"
                    value={nome}
                    onChangeText={text => setNome(text)}
                />
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    label="Senha"
                    value={senha}
                    onChangeText={text => setSenha(text)}
                />
                <TextInput
                    label="Confirmar Senha"
                    value={confirmarSenha}
                    onChangeText={text => setConfirmarSenha(text)}
                />
                <View style={ styles.containerButton }> 
                    <Button icon="content-save" mode="contained" buttonColor="#5DB075" onPress={() => handleSaveUser()}>
                        Salvar
                    </Button>
                </View>
            </View>
        </View>


    );
}

export default CadastroUsuarioScreen;

