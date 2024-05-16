import PocketBase from 'pocketbase'

export const pb = new PocketBase('http://127.0.0.1:8090')

export let currentUser = pb.authStore.model

export let auths = pb.authStore.isValid

pb.authStore.onChange((auth)=>{
    console.log('authstore changed', auth)
    currentUser = pb.authStore.model
    auths = pb.authStore.isValid
})

