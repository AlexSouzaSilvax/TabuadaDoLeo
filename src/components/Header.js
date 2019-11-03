import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';

function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.titulo}>{`Tabuada do Léo`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#444',
        height: 42,
        marginTop: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
        marginTop: 5

    },
    iconVoltar: {
        height: 22,
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    iconLimparTela: {
        height: 22,
        width: 22,
        marginTop: 10,
        margin: 5,
        alignSelf: 'flex-end',
    }
});

export default Header;