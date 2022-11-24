import Pusher from 'pusher'
import ClientPusher from 'pusher-js'

export const serverPusher = new Pusher({
    appId: "1512911",
    key: "75629198788c15e5fbaf",
    secret: "a9b077dc93412559189e",
    cluster: "ap1",
    useTLS: true,
})

export const clientPusher = new ClientPusher ('75629198788c15e5fbaf', {
    cluster: 'ap1',
    forceTLS: true,
})