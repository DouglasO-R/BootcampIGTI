import { app } from "./src/App";

app.listen(global.port, () =>{
    global.logger.info(`Server started at Port:${global.port}`);
});