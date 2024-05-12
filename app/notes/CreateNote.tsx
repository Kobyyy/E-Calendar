'use client';

import {useState} from "react";
import PocketBase from 'pocketbase';

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
        <form onSubmit ={create}>
            <h3>Create a new Note</h3>
            <input type = "text" placeholder="Title" value={title} onChange={(e) =>setTitle(e.target.value)}/>
            <textarea placeholder="Content" value = {content} onChange={(e)=>setContent(e.target.value)}/>
            <button type="submit">Create Note</button>
        </form>
    )
}