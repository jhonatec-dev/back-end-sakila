import { Request, Response } from "express";
import { DeleteActorUseCase } from "./DeleteActorUseCase";

class DeleteActorController {
  constructor(private deleteActorUseCase: DeleteActorUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const deletedActor = await this.deleteActorUseCase.execute(id as string);
      return response.status(200).json(deletedActor);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { DeleteActorController };
