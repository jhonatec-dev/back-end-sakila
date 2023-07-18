import { Actor } from "../../models/Actor";
import { IActorRepository } from "../../repositories/IActorsRepository";

class DeleteActorUseCase{
  constructor(private actorRepository: IActorRepository){}
  async execute(id: string | number): Promise<Actor> {
    return this.actorRepository.delete(id);
  }
}

export { DeleteActorUseCase };
