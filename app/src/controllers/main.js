import { mainService } from "./../services";

async function index(req,res,next){
    try {
        const data = await mainService.index();
        res.status(200).json({ data });
        global.logger.info((`method:${req.method} - url:${req.url} - status:${res.statusCode}`))
    } catch (error) {
        next(error);
    }
}

async function create(req,res,next){
    try {
        const data = req.body;
        const produto = await mainService.create(data);
        res.status(201).json({ produto });
        global.logger.info((`method:${req.method} - url:${req.url} - status:${res.statusCode} - body:${ JSON.stringify(data) } `))
    } catch (error) {
        next(error);
    }
}

async function update(req,res,next){
    try {
        const id = parseInt(req.params.id)
        const data = req.body;
        const produto = await mainService.update(id,data);
        res.status(200).json({ produto })
        global.logger.info((`method:${req.method} - url:${req.url} - status:${res.statusCode} - body:${ JSON.stringify(data) }`))
    } catch (error) {
        next(error);
    }
}

async function delet(req,res,next){
    try {
        const id = parseInt(req.params.id)
        console.log(id);
        await mainService.delet(id)
        res.status(200).json({message:"delet Route"})
        global.logger.info((`method:${req.method} - url:${req.url} - status:${res.statusCode}`))
    } catch (error) {
        next(error);
    }
}

export default {
    index,
    create,
    update,
    delet
}