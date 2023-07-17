import { Actor } from "../../models/Actor";
import { IActorRepository } from "../../repositories/IActorsRepository";

class ListSingleActorUseCase{
  constructor(private actorRepository: IActorRepository){}
  async execute(id: number): Promise<Actor> {
    return this.actorRepository.findById(id);
  }
}

export { ListSingleActorUseCase };
