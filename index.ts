import {app} from './src/app';

async function main(){
    const port = 3000;
    const server = await app(false);
    server.listen({port:port});
}


main().then((e)=>console.log('Server started')).catch((e)=>console.log('Server failed to start'));