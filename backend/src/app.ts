import express from 'express';
import routes from './routes';

export default class App {
  #server: express.Express;
  #routesServer: {[key:string]: express.Router};

  constructor(server = express(), routesServer =  routes) {
    this.#server = server;

    this.#server.use(express.json());
    this.#routesServer = routesServer;

    this.#routes();
  }

  #routes() {
    Object.entries(this.#routesServer).forEach(([name, route]) => {
      this.#server.use(`/${name}`, route);
    });
  }

  public start(port: number) {
    this.#server.listen(port, () =>
      console.log('server running at port: ', port)
    );
  }
}
