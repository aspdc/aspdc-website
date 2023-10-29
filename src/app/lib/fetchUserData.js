import {getItem} from '../../utils/get-item'
export async function getData() {
    const res=await getItem()
    return res
  }