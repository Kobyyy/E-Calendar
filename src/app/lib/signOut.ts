'use client'
import {pb,currentUser} from './pocketbase'
import {deleteSession } from './createSession'

    export async function signOut() {
        deleteSession(currentUser)
        pb.authStore.clear()
        console.log(currentUser);
        window.location.reload()
    }
