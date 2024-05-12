import Link from 'next/link'
import PocketBase from 'pocketbase';
import CreateNote from './CreateNote';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    prefferedRegion = 'auto'

async function getNotes() {
    const db = new PocketBase('http://127.0.0.1:8090/')
    const data = await db.collection('notes').getList(1,50)
    return data?.items as any[]
}

export default async function NotesPage() {
    const notes = await getNotes()
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
<div>
    <h1>Notes</h1>
    <div>
        {notes?.map((note)=>{
            return <Note key={note.id} note = {note}/>
        })}
    </div>
    <CreateNote/>
</div>
    </main>
    );    
}

function Note({note}:any){
    const {id,Title,Content,created} = note || {}

    return(
        <Link href = {`/notes/${id}`}>
            <div className='resize-box hover-test'>
                <h2>{Title}</h2>
                <h5>{Content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}