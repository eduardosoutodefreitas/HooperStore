// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAYZK1PhdUmPHS4IEW97UBiUxES75wnNBQ',
  authDomain: 'hooperstore-d8265.firebaseapp.com',
  projectId: 'hooperstore-d8265',
  storageBucket: 'hooperstore-d8265.appspot.com',
  messagingSenderId: '498615576606',
  appId: '1:498615576606:web:64e0173f1bcb33860e660f'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
