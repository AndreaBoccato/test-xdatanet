import { ref } from 'vue'
import { Item } from '../models/item.model'

class ItemService {
  selectedItem = ref<Item | null>(null)

  list(): Item[] {
    return []
  }
}

const itemService = new ItemService()
export default itemService
