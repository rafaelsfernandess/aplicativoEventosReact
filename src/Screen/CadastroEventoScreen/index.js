import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";

import styles from './styles'
import { useState } from "react";
import { ScrollView } from "react-native";

function CadastroEventoScreen() {
    const [nome, setNome] = useState('')
    const [horarioInicio, setHorarioInicio] = useState('')
    const [horarioTermino, setHorarioTermino] = useState('')
    const [cep, setCep] = useState('')
    const [numero, setNumero] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    const [descricao, setDescricao] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text variant="headlineLarge" style={styles.title}>Cadastrar Evento</Text>
            </View>

            <ScrollView>
                <View style={styles.containerInputs}>
                    
                    <TextInput
                        activeOutlineColor='#5DB075'
                        mode="outlined"
                        label="Nome Completo"
                        value={nome}
                        onChangeText={text => setNome(text)}
                    />
                    <TextInput
                        activeOutlineColor='#5DB075'
                        mode="outlined"
                        label="Horário de início"
                        value={horarioInicio}
                        onChangeText={text => setHorarioInicio(text)}
                    />
                    <TextInput
                        activeOutlineColor='#5DB075'
                        mode="outlined"
                        label="Horário de término"
                        value={horarioTermino}
                        onChangeText={text => setHorarioTermino(text)}
                    />
                    <TextInput
                        
                        activeOutlineColor='#5DB075'
                        mode="outlined"
                        label="CEP"
                        value={cep}
                        onChangeText={text => setCep(text)}
                    />
                    <TextInput
                        activeOutlineColor='#5DB075'
                        mode="outlined"
                        label="Numero"
                        value={numero}
                        onChangeText={text => setNumero(text)}
                    />
                    <TextInput
                        activeOutlineColor='#5DB075'
                        mode="outlined"
                        label="Rua"
                        value={rua}
                        onChangeText={text => setRua(text)}
                    />
                    <TextInput
                        activeOutlineColor='#5DB075'
                        mode="outlined"
                        label="Estado"
                        value={estado}
                        onChangeText={text => setEstado(text)}
                    />
                    <TextInput
                        activeOutlineColor='#5DB075'
                        mode="outlined"
                        label="Bairro"
                        value={bairro}
                        onChangeText={text => setBairro(text)}
                    />
                    <TextInput
                        activeOutlineColor='#5DB075'
                        mode="outlined"
                        label="Cidade"
                        value={cidade}
                        onChangeText={text => setCidade(text)}
                    />
                    <TextInput
                        activeOutlineColor='#5DB075'
                        mode="outlined"
                        label="Descricao"
                        value={descricao}
                        onChangeText={text => setDescricao(text)}
                    />
                    <View style={styles.containerButton}>
                    </View>
                </View>
            </ScrollView>
            <Button icon="content-save" mode="contained" buttonColor="#5DB075" onPress={() => handleSaveUser()}>
                Salvar
            </Button>
        </View>
    );
}

export default CadastroEventoScreen;
