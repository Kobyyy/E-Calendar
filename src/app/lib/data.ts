import 'server-only'
import {cookies} from 'next/headers'

export async function getCatData() {
    const cookieStore = cookies()
    const name = cookieStore.get('UID').value
    const url = `http://127.0.0.1:8090/api/collections/Categories/records?page=1&perPage=30&filter=Fk_User_Id='${name}'`
    console.log(`url: ${url}`)
    const record = await fetch(url)
    const data = await record.json();
    return data?.items as any[];
}
export async function getEventData(CategoryId:any) {
    const url = `http://127.0.0.1:8090/api/collections/Events/records?page=1&perPage=30&filter=Fk_Category_Id='${CategoryId}'`
    console.log(`url: ${url}`)
    const record = await fetch(`http://127.0.0.1:8090/api/collections/Events/records?page=1&perPage=30&filter=Fk_Category_Id='${CategoryId}'`)
    const data = await record.json();
    return data?.items as any[];
}