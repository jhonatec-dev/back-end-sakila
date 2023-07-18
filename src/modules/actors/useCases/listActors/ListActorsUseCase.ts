import { Actor } from "../../models/Actor";
import { IActorRepository } from "../../repositories/IActorsRepository";

class ListActorsUseCase {
  constructor(private actorRepository: IActorRepository) {}
  async execute(name: string, order: string, limit: string): Promise<Actor[]> {

    return this.actorRepository.findAll(name, order, limit);
  }
}

export { ListActorsUseCase };
