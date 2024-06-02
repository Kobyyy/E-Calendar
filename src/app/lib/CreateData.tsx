'use client';

import {useState} from "react";
import PocketBase from 'pocketbase';
import Draggable from 'react-draggable';

export default function createNote(){
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    const create = async()=>{
        const db = new PocketBase('http://127.0.0.1:8090')
        const record = await db.collection('notes').create({
            Title: title,
            Content: content
        });
    }
    return(
    <Draggable>
    <div>
        <form onSubmit ={create} className="hover-test duration-0 transition-none bg-indigo-400 grid grid-cols-3 gap-y-1 grid-flow-col grid-rows-3" >
            <h3 className=" col-span-3">Create a new Note</h3>
            <input className = "rounded-md col-span-3" type = "text" placeholder="Title" value={title} onChange={(e) =>setTitle(e.target.value)}/>
            <textarea className = "rounded-md col-span-2" placeholder="Content" value = {content} onChange={(e)=>setContent(e.target.value)}/>
            <button className = " col-span-3" type="submit">Create Note</button>
        </form>
    </div>
    </Draggable>
    )
}