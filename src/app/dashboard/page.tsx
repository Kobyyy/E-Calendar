import Link from 'next/link'
import CreateNote from './CreateNote';
import { signOut } from '../lib/signOut'
import { getCatData,getEventData } from '../lib/data'
import { date } from 'zod';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    prefferedRegion = 'auto'

export default async function CategoriesPage() {
    const categories = await getCatData()
    const events = await getEventData(categories?.map((category)=>{return category.id}))
    events?.map((event)=>{console.log(event)})
    return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
    <h1>Category</h1>
    <div>
        {categories?.map((category)=>{return (<Category key={category.id} category = {category}>
        {events?.map((event)=>{if(event.Fk_Category_Id==category.id) return (<Event key={event.id} event = {event}>
            </Event>)})}
            </Category>)})}
    </div>
    </div>
    <form onSubmit={signOut}>
        <button type = "submit">Sign Out</button>
    </form>
    </main>
    );    
}

function Category({category}:any){
    const {id,CategoryName,Fk_User_Id,created} = category || {}
    return(
            <div className='text-wrap grid grid-rows-3 grid-cols-1 gap3 bg-white text-black'>
                <h2 className='row-span-1 text-balance capitalize underline decoration-pink-600/60'>{CategoryName}</h2>
                <h5 className='row-span-1'>{Fk_User_Id}</h5>
                <p className='row-span-1 underline underline-offset-2'>{created.replace("Z","")}</p>
            </div>
    )
}

function Event({event}:any){
    const {EventName,StartDesc,EndDesc,EventStart,EventEnd,Fk_Category_Id,created} = event || {}
    return(
            <div className='text-wrap grid grid-rows-3 grid-cols-1 gap3 bg-white text-black'>
                <h2 className='row-span-1 text-balance capitalize underline decoration-pink-600/60'>{EventName}</h2>
                <h5 className='row-span-1'>{StartDesc}</h5>
                <h5 className='row-span-1'>{EndDesc}</h5>
                <h5 className='row-span-1'>{EventStart}</h5>
                <h5 className='row-span-1'>{EventEnd}</h5>
                <h5 className='row-span-1'>{Fk_Category_Id}</h5>
                <p className='row-span-1 underline underline-offset-2'>{created.replace("Z","")}</p>
            </div>
    )
}