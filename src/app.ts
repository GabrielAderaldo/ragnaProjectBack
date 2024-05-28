import fastify from 'fastify';


export async function app(logger:boolean){
    const server = fastify({logger:logger});
    return await server
}