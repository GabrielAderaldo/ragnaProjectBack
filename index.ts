import {app} from './src/app';

async function main(){
    const port = 3000;
    const server = await app(false);
    await server.listen({port:3333})
}


main().then((e)=>console.log('Server started')).catch((e)=>console.log('Server failed to start'));