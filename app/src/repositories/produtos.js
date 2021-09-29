import models from "./../models";

async function index() {
    const res = await models.produto.findAll();
    return res;
}

async function create(produto) {
    const novoproduto = models.produto.create(produto);
    return novoproduto;
}

async function update(id, body) {

    await models.produto.update(body, { where: { id: Number(id) } });
    const produto = await models.produto.findOne({ where: { id: Number(id) } });
    return produto;
}

async function delet (id) {
    return await models.produto.destroy({ where: { id: id } });
}

export default {
    index,
    create,
    update,
    delet
}