import { Actor } from "../../models/Actor";
import { IActorRepository } from "../../repositories/IActorsRepository";

class ListActorsUseCase{
  constructor(private actorRepository: IActorRepository){}
  async execute(): Promise<Actor[]> {
    return this.actorRepository.findAll();
  }
}

export { ListActorsUseCase };
