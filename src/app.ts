import Express from "express";
import {registerMiddlewares} from "./routes/routes";

export const startApp = () => {
    const app = Express();
    const PORT = process.env.PORT || 5001;

    registerMiddlewares(app);

    app.listen(PORT, ()=>{
        console.log(`Server started on port ${PORT}`);       
    })
}