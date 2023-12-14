import { Alert, View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import styles from './styles';
import { useState, useEffect } from "react";
import { ScrollView } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";


function EditarCadastroEventoScreen({ route }) {

    const [titulo, setTitulo] = useState(route.params.titulo);
    const [horarioInicio, setHorarioInicio] = useState({
        hours: parseInt(route.params.horarioInicio.split(':')[0]),
        minutes: parseInt(route.params.horarioInicio.split(':')[1]),
    });
    const [horarioTermino, setHorarioTermino] = useState({
        hours: parseInt(route.params.horarioTermino.split(':')[0]),
        minutes: parseInt(route.params.horarioTermino.split(':')[1]),
    });

    const [descricao, setDescricao] = useState(route.params.descricao);
    const [id, setId] = useState(route.params.id);

    async function handleSaveEvent() {
        try {
            let eventosDoLocalStorage = await AsyncStorage.getItem('eventos');
            if (eventosDoLocalStorage) {
                let eventos = JSON.parse(eventosDoLocalStorage);
                
                const eventoIndex = eventos.findIndex(evento => evento.id === id);
                
                if (eventoIndex !== -1) {
                    eventos[eventoIndex] = {
                        ...eventos[eventoIndex],
                        titulo,
                        hInicio: `${horarioInicio.hours}:${horarioInicio.minutes}`, // Converter de volta para string
                        hTermino: `${horarioTermino.hours}:${horarioTermino.minutes}`, // Converter de volta para string
                        descricao
                    };
                    
                    await AsyncStorage.setItem('eventos', JSON.stringify(eventos));
                }
            }
            // Navegue para a tela de lista de eventos ou faça o que for apropriado para o seu aplicativo
        } catch (error) {
            console.error('Erro ao salvar evento:', error);
        }
    }



    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text variant="headlineLarge" style={styles.title}>Editar Evento</Text>
            </View>

            <ScrollView>
                <View style={styles.containerInputs}>
                    <TextInput
                        activeOutlineColor='#5DB075'
                        mode="outlined"
                        label="Nome Completo"
                        value={titulo}
                        onChangeText={text => setTitulo(text)}
                    />
                    <TextInput
                        activeOutlineColor='#5DB075'
                        mode="outlined"
                        label="Horário de início"
                        value={`${horarioInicio.hours}:${horarioInicio.minutes}`}
                        onChangeText={text => {
                            const [hours, minutes] = text.split(':');
                            setHorarioInicio({ hours: parseInt(hours), minutes: parseInt(minutes) });
                        }}
                    />
                    <TextInput
                        activeOutlineColor='#5DB075'
                        mode="outlined"
                        label="Horário de término"
                        value={`${horarioTermino.hours}:${horarioTermino.minutes}`}
                        onChangeText={text => {
                            const [hours, minutes] = text.split(':');
                            setHorarioTermino({ hours: parseInt(hours), minutes: parseInt(minutes) });
                        }}
                    />
                    <TextInput
                        activeOutlineColor='#5DB075'
                        mode="outlined"
                        label="Descricao"
                        value={descricao}
                        onChangeText={text => setDescricao(text)}
                    />
                    <View style={styles.containerButton}></View>
                </View>
            </ScrollView>
            <Button icon="content-save" mode="contained" buttonColor="#5DB075" onPress={handleSaveEvent}>
                Salvar
            </Button>
        </View>
    );
}

export default EditarCadastroEventoScreen;
