import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'



export const createEvent = async (event) => {
    return (
        await AsyncStorage.setItem('event', JSON.stringify(event))
    )

}

export const fetchEvent = async () => {
    return (
       await AsyncStorage.getItem('event')
    )

}