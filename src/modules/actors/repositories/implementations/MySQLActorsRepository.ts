import { Actors } from "../../../../database/models/Actors";
import { Actor } from "../../models/Actor";
import { IActorRepository } from "../IActorsRepository";

class MySQLActorsRepository implements IActorRepository {
  async findAll() {
    const actors: Actor[] = await Actors.findAll();
    return actors;
  }
  async create(actor: Actor) {
    const newActor = await Actors.create({ ...actor });
    return newActor;
  }
  findByName(name: string) {
    throw new Error("Method not implemented.");
  }
  async findById(id: string) {
    const actor: Actors | null = await Actors.findByPk(id);
    return actor;
  }
}

export { MySQLActorsRepository };
