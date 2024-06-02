import PocketBase from 'pocketbase'
export async function createUser (userData:any) {
    const array = [...userData]
    const url = `http://127.0.0.1:8090/api/collections/Users/records?filter=username='${array[0]}'`
    const exRecord = await fetch(url)
    const exData = await exRecord.json()
    if(exData.items.length == 0){
        console.log(`created user`)
        let pb = new PocketBase('http://127.0.0.1:8090')
        const stuff = {
            "ColorScheme": true
        };
        const Srecord = await pb.collection('Settings').create(stuff)
        const settingsId = Srecord.id
        const data = {
            "username": array[0],
            "Name" : array[0],
            "password": array[1],
            "passwordConfirm": array[1],
            "Fk_Settings_Id": settingsId
        }
        console.log(data)
        const record = await pb.collection('Users').create(data)
        return true
    }
    return false
}