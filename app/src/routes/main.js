// 
import { Router } from "express";

// 
import errorHandler from "./../utils/errorHandler";
import { mainController } from "./../controllers";

// 
const router = Router();

// 
router.get("/",mainController.index);
router.post("/",mainController.create);
router.put("/:id",mainController.update);
router.delete("/:id",mainController.delet);


router.use(errorHandler);

export default router;