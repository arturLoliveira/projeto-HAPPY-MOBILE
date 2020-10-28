import React, { useEffect, useState } from 'react';
import  MapView, { Marker, Callout, PROVIDER_GOOGLE }  from 'react-native-maps';
import mapMarker from '../images/map-marker.png';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../services/api';

interface Orphanage {
  id: number,
  name: string,
  latitude: number,
  longitude: number,
}

export default function OrphanagesMap() {
    const navigation = useNavigation();
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
      api.get('orphanages').then(res => {
        setOrphanages(res.data);
      });
    }, []);
    
    function handleNavigationToOrphanageDetails(id: number) {
        navigation.navigate('OrphanageDetails', { id });
    }
    function handleNavigationToCreateOrphanage() {
      navigation.navigate('SelectMapPosition');
    }

    return(
      <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} 
        style={styles.map} 
        initialRegion={{
        latitude: -18.701302,
        longitude: -40.4006823,
        latitudeDelta: 0.016,
        longitudeDelta: 0.018,
      }} 
      >
        {orphanages.map(orphanage => {
          return (
          <Marker
          key={orphanage.id}
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate= {{
          latitude: orphanage.latitude,
          longitude: orphanage.longitude,
          }} 
        >
          <Callout tooltip={true} onPress={() => handleNavigationToOrphanageDetails(orphanage.id)}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>{orphanage.name}</Text>
            </View>
          </Callout>
        </Marker>
          );

        })}
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{orphanages.length} orfanatos encontrados</Text>

        <RectButton style={styles.createOrphanageButton} onPress={handleNavigationToCreateOrphanage}>
          <Feather name="plus" size={20} color='#FFF'/>
        </RectButton>
      </View>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  
    },
    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 16,
      justifyContent: 'center',
      elevation: 3,
    },
    calloutText: {
      color: '#0089a5',
      fontSize: 14,
      fontFamily: 'Nunito_700Bold'
    },
    footer: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
  
      backgroundColor: '#FFF',
      borderRadius: 28,
      height: 46,
      paddingLeft: 24,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      
      elevation: 3,
    },
    footerText: {
      color: '#8fa7b3',
      fontFamily: 'Nunito_700Bold',
    },
    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor: '#15c3d6',
      borderRadius: 26,
      justifyContent: 'center',
      alignItems: 'center',
    }
  
  });