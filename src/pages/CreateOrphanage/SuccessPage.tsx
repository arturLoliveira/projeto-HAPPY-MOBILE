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
        <Image
            source={require('../../../assets/Vector.png')}
              style={styles.VectorImage}
            />
        <Text style={styles.TopText}>Ebaaa!</Text>
        <Text style={styles.BottomText}>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é so esperar :)</Text>
        <RectButton style={styles.OkButton} onPress={GoBackHome}>
            <Text style={styles.ButtonText}>Ok</Text>
        </RectButton>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#39CC83',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    VectorImage: {
        marginTop: 50
    },
    TopText: {
        alignItems: 'center',
        fontSize: 40,
        color: 'white',
        fontFamily: 'Nunito_700Bold'
    },
    BottomText: {
        textAlign: 'center',
        fontSize: 20,
        marginHorizontal: 40,
        color: 'white',
        fontFamily: 'Nunito_700Bold'
    },
    ButtonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Nunito_700Bold'
    },
    OkButton: {
        backgroundColor: '#19C06D',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 40,
        width: 150,
        marginBottom: 50,
    }


})