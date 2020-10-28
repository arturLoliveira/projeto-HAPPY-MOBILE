import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';


export default function SuccessPage() {
    const navigation = useNavigation();

    function GoBackHome() {
        navigation.navigate('OrphanagesMap')
    }
    return (
    <View style={styles.container}>
        <RectButton style={styles.XButton} >
            <Text style={styles.XText}>X</Text>
        </RectButton>

        <Text style={styles.TopText}>Cancelar cadastro</Text>
        <Text style={styles.BottomText}>Tem certeza que quer cancelar esse cadastro?</Text>

        <View style={styles.ButtonsView}>
        <RectButton style={styles.CancelButton} onPress={navigation.goBack}>
            <Text style={styles.NoText}>Não</Text>
        </RectButton>

        <RectButton style={styles.ContinueButton} onPress={GoBackHome}>
            <Text style={styles.YesText}>Sim</Text>
        </RectButton>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FF669D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonsView: {
        flexDirection: 'row',
    },
    VectorImage: {
        marginTop: 50
    },
    TopText: {
        alignItems: 'center',
        fontSize: 32,
        color: 'white',
        fontFamily: 'Nunito_700Bold'
    },
    BottomText: {
        textAlign: 'center',
        fontSize: 20,
        marginHorizontal: 60,
        color: 'white',
        fontFamily: 'Nunito_700Bold',
        marginTop: 20,
    },
    XText: {
        color: '#D6487B',
        fontSize: 25,
        fontFamily: 'Nunito_700Bold'
    },
    NoText: {
        color: '#FFF',
        fontSize: 15,
        fontFamily: 'Nunito_700Bold'
    },
    YesText: {
        color: '#FFF',
        fontSize: 15,
        fontFamily: 'Nunito_700Bold'
    },
    XButton: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        width: 65,
        marginTop: 40,
        marginBottom: 50,
    },
    CancelButton: {
        backgroundColor: '#D6487B',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 40,
        width: 150,
        marginRight: 25
           
    },
    ContinueButton: {
        backgroundColor: '#D6487B',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 40,
        width: 150,
        marginBottom: 50,
    }


})