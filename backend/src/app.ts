import express from 'express';
import routes from './routes';
import errorMiddleware from './middlewares/error';

export default class App {
  #server: express.Express;
  #routesServer: {[key:string]: express.Router};

  constructor(server = express(), routesServer =  routes) {
    this.#server = server;

    this.#config();

    this.#routesServer = routesServer;

    this.#routes();
  }

  #routes() {
    Object.entries(this.#routesServer).forEach(([name, route]) => {
      this.#server.use(`/${name}`, route);
    });
    this.#server.use(errorMiddleware);
  }

  #config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.#server.use(express.json());
    this.#server.use(accessControl);
  }


  public start(port: number) {
    this.#server.listen(port, () =>
      console.log('server running at port: ', port)
    );
  }
}
