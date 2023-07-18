import { Actor } from "../models/Actor";

interface IActorRepository {
  create(actor: Actor): Promise<Actor>;
  // findByName(name: string): Promise<Actor[]>;
  findById(id: string | number): Promise<Actor>;
  findAll(name, order, limit): Promise<Actor[]>;
  delete(id : string | number): Promise<Actor>;
}

export { IActorRepository };
