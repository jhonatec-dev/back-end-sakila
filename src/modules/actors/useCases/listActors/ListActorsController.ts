import { Request, Response } from "express";
import { ListActorsUseCase } from "./ListActorsUseCase";

class ListActorsController {
  constructor(private listActorsUseCase: ListActorsUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const all = await this.listActorsUseCase.execute();
      if(!all) {
        throw new Error("Actors not found");
      }
      return response.json(all);
      
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListActorsController };
