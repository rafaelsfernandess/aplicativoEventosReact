import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const createEvent = async (novoEvento) => {
    const eventosAnteriores = await fetchEvent();
    const eventos = eventosAnteriores ? eventosAnteriores : [];
  
    eventos.push(novoEvento);
  
    const eventosString = JSON.stringify(eventos);
    await AsyncStorage.setItem('eventos', eventosString);
    console.log('Novo evento adicionado e salvo no AsyncStorage');
  }

export const fetchEvent = async (event) => {

    const eventosAnteriores = await AsyncStorage.getItem('eventos')
    return JSON.parse(eventosAnteriores)

}
