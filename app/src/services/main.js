import { produtoRepository } from "./../repositories";

async function index(){
    return await produtoRepository.index();
}

async function create(produto){
    return await produtoRepository.create(produto)
}

async function update(id,body){
    return await produtoRepository.update(id, body)
}
async function delet(id){
    return await produtoRepository.delet(id)
}

export default {
    index,
    create,
    update,
    delet
}