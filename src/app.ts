import Express from "express";
import {registerMiddlewares} from "./routes/routes";

const startApp = () => {
    const app = Express();
    const {PORT} = process.env;

    registerMiddlewares(app);

    app.listen(PORT, ()=>{
        console.log(`Server started on port ${PORT}`);       
    })
}
export default startApp;