import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { Text, Spinner } from 'native-base';

function CardTabuada({ tabuada, _onPress }) {

    const [loading, setLoading] = useState(true);
    const [i] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [j, setJ] = useState();
    const [a] = useState('0');
    const [result, setResult] = useState('0');

    useEffect(() => {
        async function fetchFont() {
            await Font.loadAsync({
                Roboto: require("../../node_modules/native-base/Fonts/Roboto.ttf"),
                Roboto_medium: require("../../node_modules/native-base/Fonts/Roboto_medium.ttf"),
            });

            setLoading(false);
        };

        fetchFont();

    }, []);

    if (loading) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <Spinner size="large" />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>

                <TouchableOpacity style={styles.card} onPress={_onPress}>
                    <Text style={styles.textCard}>{tabuada.key}</Text>
                </TouchableOpacity>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        borderWidth: 1,
        borderColor: '#444',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    texCard: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5,
    },
});

export default CardTabuada;