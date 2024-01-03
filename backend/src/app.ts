import express from 'express';

export default class App {
  #server: express.Express;

  constructor(server = express()) {
    this.#server = server;

    this.#server.use(express.json());

    this.#routes();
  }

  #routes() {
    this.#server.use('/', (req, res) => res.status(200).json('bem vindo'));
  }

  public start(port: number) {
    this.#server.listen(port ,() => console.log('server running at port: ', port));
  }
}