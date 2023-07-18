import { Actor } from "../../models/Actor";
import { IActorRepository } from "../../repositories/IActorsRepository";

class CreateActorUseCase{
  constructor(private actorRepository: IActorRepository){}
  async execute(actor : Actor): Promise<Actor[]> {
    return this.actorRepository.create({...actor});
  }
}

export { CreateActorUseCase };
