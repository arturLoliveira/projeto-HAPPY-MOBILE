import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import OnboardingScreen from './pages/OnboardingScreen';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import SuccessPage from './pages/CreateOrphanage/SuccessPage';
import CancelRegister from './pages/CreateOrphanage/CancelRegister';


import Header from './components/Header';


export default function Routes() {

        return(
            <NavigationContainer>          
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
                    <Screen
                        name="OnboardingScreen" 
                        component={OnboardingScreen}
                    />
                    
                    <Screen 
                        name="OrphanagesMap" 
                        component={OrphanagesMap} 
                    />
    
                    <Screen 
                        name="OrphanageDetails" 
                        component={OrphanageDetails} 
                        options={{
                            headerShown: true,
                            header: () => <Header showCancel={false} title="Orfanato" />
                        }}
                    />  
                    <Screen 
                        name="SelectMapPosition" 
                        component={SelectMapPosition}
                        options={{
                            headerShown: true,
                            header: () => <Header title="Selecione no mapa" />
                        }} 
                    />
    
                    <Screen 
                        name="OrphanageData" 
                        component={OrphanageData} 
                        options={{
                            headerShown: true,
                            header: () => <Header title="Informe os dados" />
                        }}
                    />
                    <Screen
                        name="SuccessPage" 
                        component={SuccessPage}
                    />
                    <Screen
                        name="CancelRegister" 
                        component={CancelRegister}
                    />
                    
            </Navigator>
            </NavigationContainer>


        );
    }