import { ref } from 'vue'
import { Item } from '../models/item.model'
import firestore from '@/firebase/firestore'
import { collection, Firestore, getDocs } from 'firebase/firestore'

class ItemService {
  firestore: Firestore
  selectedItem = ref<Item | null>(null)

  constructor(firestore: Firestore) {
    this.firestore = firestore
  }

  async list(): Promise<Item[]> {
    const snapshot = await getDocs(collection(this.firestore, 'items'))
    return snapshot.docs.map((doc) => {
      const data = doc.data()

      return new Item({
        id: doc.id,
        title: data.title,
        description: data.description,
        image: data.image,
        tags: data.tags,
      })
    })
  }
}

const itemService = new ItemService(firestore)
export default itemService
