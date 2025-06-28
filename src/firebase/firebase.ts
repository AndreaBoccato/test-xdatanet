import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDishgnk-TarscnjA64bnoaA5LOMoKUJAM',
  authDomain: 'test-xdatanet.firebaseapp.com',
  projectId: 'test-xdatanet',
  storageBucket: 'test-xdatanet.appspot.com',
  messagingSenderId: '895322849109',
  appId: '1:895322849109:web:b5ffbf951436fdd60f39dc',
}

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
