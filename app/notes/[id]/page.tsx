import PocketBase from 'pocketbase';

async function getNote(noteId: string) {
    const db = new PocketBase('http://127.0.0.1:8090')
    const data = await db.collection('notes').getOne(noteId)
    console.log(data)
    return data
}

export default async function NotePage({params}:any) {
    const note = await getNote(params.id)
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <h1>notes/{note.id}</h1>
            <div>
                <h3>{note.Title}</h3>
                <h5>{note.Content}</h5>
                <p>{note.created}</p>
            </div>
        </div>
        </main>
    )
}