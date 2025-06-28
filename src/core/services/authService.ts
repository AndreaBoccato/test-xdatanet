import firebaseAuth from '@/firebase/auth'
import {
  Auth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { computed, ref } from 'vue'

class AuthService {
  firebaseAuth: Auth

  private currentUserId = ref<string | null>(null)

  isLoggedIn = computed(() => this.currentUserId.value !== null)

  constructor(firebaseAuth: Auth) {
    this.firebaseAuth = firebaseAuth

    onAuthStateChanged(this.firebaseAuth, (user) => {
      console.log('onAuthStateChanged', user)
      this.currentUserId.value = user != null ? user.uid : null
    })
  }

  async loginWithEmailAndPassword(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(this.firebaseAuth, email, password)
  }

  async loginWithGoogle(): Promise<void> {
    await signInWithPopup(this.firebaseAuth, new GoogleAuthProvider())
  }

  async logout(): Promise<void> {
    await signOut(this.firebaseAuth)
  }
}

const authService = new AuthService(firebaseAuth)
export default authService
