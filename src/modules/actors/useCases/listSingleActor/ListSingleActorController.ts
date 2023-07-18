import { Request, Response } from "express";
import { ListSingleActorUseCase } from "./ListSingleActorUseCase";

class ListSingleActorController {
  constructor(private ListSingleActorUseCase: ListSingleActorUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const actor = await this.ListSingleActorUseCase.execute(+id);
      if(!actor) {
        throw new Error("Actor not found");
      }
      return response.json(actor);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListSingleActorController };
