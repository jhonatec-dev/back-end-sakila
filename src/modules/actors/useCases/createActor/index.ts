import { MySQLActorsRepository } from "../../repositories/implementations/MySQLActorsRepository";
import { CreateActorController } from "./CreateActorController";
import { CreateActorUseCase } from "./CreateActorUseCase";

const listActorRepo = new MySQLActorsRepository();

const createActorUseCase = new CreateActorUseCase(listActorRepo);

const createActorController = new CreateActorController(createActorUseCase);

export { createActorController };
