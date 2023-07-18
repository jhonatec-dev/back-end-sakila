import { Request, Response } from "express";
import { Actor } from "../../models/Actor";
import { CreateActorUseCase } from "./CreateActorUseCase";

class CreateActorController {
  constructor(private createActorUseCase: CreateActorUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { first_name, last_name } = request.body;
      const newActor = new Actor();
      newActor.first_name = first_name;
      newActor.last_name = last_name;
      const createdActor = await this.createActorUseCase.execute(newActor);
      return response.status(200).json(createdActor);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateActorController };
