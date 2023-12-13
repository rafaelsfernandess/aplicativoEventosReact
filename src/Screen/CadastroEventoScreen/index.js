import { Platform, View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { enGB, registerTranslation } from 'react-native-paper-dates'
registerTranslation('pt', enGB)
import { TimePickerModal, DatePickerInput } from 'react-native-paper-dates';

import styles from './styles'
import { useState, useCallback } from "react";
import { ScrollView } from "react-native";

function CadastroEventoScreen({ navigation }) {

    const [titulo, setTitulo] = useState('')
    const [horarioInicio, setHorarioInicio] = useState({})
    const [horarioTermino, setHorarioTermino] = useState({})
    const [inputDateInico, setInputDateInicio] = useState('')
    const [descricao, setDescricao] = useState('')


    const onDismissInicio = useCallback(() => {
        setHorarioInicio(false)

    }, [setHorarioInicio])

    const onConfirmInicio = useCallback(
        ({ hours, minutes }) => {
            console.log(hours+', '+minutes)
            setHorarioInicio(false);
            setHorarioInicio({ hours, minutes });
        },
        [setHorarioInicio]
    );

    const onDismissTermino = useCallback(() => {
        setHorarioTermino(false)


    }, [setHorarioTermino])

    const onConfirmTermino = useCallback(
        ({ hours, minutes }) => {
            setHorarioTermino(false);
            setHorarioTermino({ hours, minutes });

        },
        [setHorarioTermino]
    );

    const handleSaveEvent = async () => {
        try {
            const eventosArmazenados = await AsyncStorage.getItem('eventos');
            const eventos = eventosArmazenados ? JSON.parse(eventosArmazenados) : [];

            const novoEvento = {
                id: eventos.length + 1,
                titulo,
                hInicio: horarioInicio.hours+':'+horarioInicio.minutes,
                hTermino: horarioTermino.hours+':'+horarioTermino.minutes,
                descricao,
            };
            eventos.push(novoEvento);

            await AsyncStorage.setItem('eventos', JSON.stringify(eventos));

            setTitulo('');
            setHorarioInicio('');
            setHorarioTermino('');
            setDescricao('');
            navigation.navigate('lista-eventos')
        } catch (error) {
            console.error('Erro ao salvar evento:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text variant="headlineLarge" style={styles.title}>Cadastrar Evento</Text>
            </View>

            <TimePickerModal
                visible={horarioInicio}
                onDismiss={onDismissInicio}
                onConfirm={onConfirmInicio}
                hours={12}
                minutes={14}
            />

            <TimePickerModal
                visible={horarioTermino}
                onDismiss={onDismissTermino}
                onConfirm={onConfirmTermino}
                hours={12}
                minutes={14}
            />



            <ScrollView>
                <View style={styles.containerInputs}>

                    <TextInput
                        activeOutlineColor='#5DB075'
                        mode="outlined"
                        label="Nome do evento"
                        value={titulo}
                        onChangeText={text => setTitulo(text)}
                    />
                    <View style={styles.containerButton}>

                        <Text>Horario início do evento</Text>
                        <Text>{horarioInicio.hours}:{horarioInicio.minutes}</Text>
                        <Button icon="clock-plus-outline" onPress={() => setHorarioInicio(true)} uppercase={false} mode="outlined">
                            Hora de Inicio
                        </Button>

                        <Text>Horario fim do evento</Text>
                        <Text>{horarioTermino.hours}:{horarioTermino.minutes}</Text>
                        <Button icon="clock-minus-outline" onPress={() => setHorarioTermino(true)} uppercase={false} mode="outlined">
                            Hora de Termino
                        </Button>

                    </View>
                    <Text>Dia do evento</Text>
                    <DatePickerInput
                        locale="en"
                        label=""
                        value={inputDateInico}
                        onChange={(d) => setInputDateInicio(d)}
                        inputMode="start"
                    />
                    <TextInput
                        activeOutlineColor='#5DB075'
                        multiline
                        mode="outlined"
                        label="Descricao"
                        value={descricao}
                        onChangeText={text => setDescricao(text)}
                    />

                </View>
            </ScrollView>
            <Button icon="content-save" mode="contained" buttonColor="#5DB075" onPress={() => handleSaveEvent()}>
                Salvar
            </Button>
        </View>
    );
}

export default CadastroEventoScreen;
