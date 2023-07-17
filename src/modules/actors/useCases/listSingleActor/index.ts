import { MySQLActorsRepository } from "../../repositories/implementations/MySQLActorsRepository";
import { ListSingleActorController } from "./ListSingleActorController";
import { ListSingleActorUseCase } from "./ListSingleActorUseCase";

const listActorRepo = new MySQLActorsRepository();

const listSingleActorUseCase = new ListSingleActorUseCase(listActorRepo);

const listSingleActorController = new ListSingleActorController(listSingleActorUseCase);

export { listSingleActorController };
