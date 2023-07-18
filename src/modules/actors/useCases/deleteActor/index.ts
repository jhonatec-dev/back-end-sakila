import { MySQLActorsRepository } from "../../repositories/implementations/MySQLActorsRepository";
import { DeleteActorController } from "./DeleteActorController";
import { DeleteActorUseCase } from "./DeleteActorUseCase";

const listActorRepo = new MySQLActorsRepository();

const deleteActorUseCase = new DeleteActorUseCase(listActorRepo);

const deleteActorController = new DeleteActorController(deleteActorUseCase);

export { deleteActorController };
