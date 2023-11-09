import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBKk352jTieCKgO18j1g_X0CVWegjL4IKs',
    authDomain: 'expo-shroom-seeker.firebaseapp.com',
    databaseURL:
        'https://expo-shroom-seeker-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'expo-shroom-seeker',
    storageBucket: 'expo-shroom-seeker.appspot.com',
    messagingSenderId: '934820870540',
    appId: '1:934820870540:web:57265bfdb00828d8b87ea9',
    measurementId: 'G-M7JKCBNSJL',
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage),
});
