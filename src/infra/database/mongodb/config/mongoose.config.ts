
let connectionClient:any = null

export function mongoClient(connection:any){
    if(connectionClient != null){
        return connectionClient
    }
    connectionClient = connection
    return connectionClient
}