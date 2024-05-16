import Link from 'next/link'
import CreateNote from './CreateNote';
import { pb } from '../src/lib/pocketbase'
import { signOut } from '../src/lib/signOut'

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    prefferedRegion = 'auto'

async function getNotes() {
    const data = await pb.collection('notes').getList(1,50)
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
    <form onSubmit={signOut}>
        <button type = "submit">Sign Out</button>
    </form>
    </main>
    );    
}

function Note({note}:any){
    const {id,Title,Content,created} = note || {}
    return(
        <Link href = {`/dashboard/${id}`}>
            <div className='text-wrap grid grid-rows-3 grid-cols-1 gap3 bg-white text-black'>
                <h2 className='row-span-1 text-balance capitalize underline decoration-pink-600/60'>{Title}</h2>
                <h5 className='row-span-1'>{Content}</h5>
                <p className='row-span-1 underline underline-offset-2'>{created.replace("Z","")}</p>
            </div>
        </Link>
    )
}