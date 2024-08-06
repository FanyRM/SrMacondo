import Server from "./models/server";
import dontenv from 'dotenv';

//configuramos las variables de ambiente
dontenv.config();
const server= new Server();

