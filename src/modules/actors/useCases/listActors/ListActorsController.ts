import { Request, Response } from "express";
import { ListActorsUseCase } from "./ListActorsUseCase";


class ListActorsController {
  constructor(private listActorsUseCase: ListActorsUseCase){}
  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listActorsUseCase.execute();
    return response.json(all);
  }
}

  export { ListActorsController };
