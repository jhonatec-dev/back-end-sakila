import { Actor } from "../models/Actor";

interface IActorRepository {
  create(actor: Actor): Promise<Actor>;
  findByName(name: string): Promise<Actor>;
  findById(id: string | number): Promise<Actor>;
  findAll(): Promise<Actor[]>;
}

export { IActorRepository };
