'use client'
import {pb} from './pocketbase'

    export async function signOut() {
        pb.authStore.clear()
        console.log(pb.authStore.isValid)
    }