import { Request, Response } from "express";
import { ListSingleActorUseCase } from "./ListSingleActorUseCase";


class ListSingleActorController {
  constructor(private ListSingleActorUseCase: ListSingleActorUseCase){}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const actor = await this.ListSingleActorUseCase.execute(+id);
    return response.json(actor);
  }
}

  export { ListSingleActorController };
