import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

 

const OnboardingScreen = () => {
    
    const navigation = useNavigation();
    
    return (
    <Onboarding
      onSkip={() => navigation.navigate("OrphanagesMap")}
      onDone={() => navigation.navigate("OrphanagesMap")}
      pages={[
        {
          backgroundColor: '#F2F3F5',
          image: <Image source={require('../../assets/OnboardingOne.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#F2F3F5',
          image: <Image source={require('../../assets/OnboardingTwo.png')} />,
          title: '',
          subtitle: '',
        },
      ]}
    />
    );
    };
  
  export default class App extends React.Component {
    render() {
      return (
        <OnboardingScreen />
      );
    }
  }
  