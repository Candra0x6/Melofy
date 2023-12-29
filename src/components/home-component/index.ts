interface Playlist {
    collaborative : boolean
    description: string
    external_urls : {spotify : string}
    href: string
    id: string
    images: {
        height : number | null
        url : string
        width:number | null

    }[]
    owner: {
        display_name : string
        external_urls: {
            spotify : string
        }
        href: string
        id: string
        type: string
        url: string
    }
    primary_color: string |null
    public: boolean | null
    snapshot_id: string
    tracks : {
        href: string
        total: number
    }
    type: string
    uri: string
}