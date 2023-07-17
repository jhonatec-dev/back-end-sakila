import { MySQLActorsRepository } from "../../repositories/implementations/MySQLActorsRepository";
import { ListActorsController } from "./ListActorsController";
import { ListActorsUseCase } from "./ListActorsUseCase";

const listActorRepo = new MySQLActorsRepository();

const listActorsUseCase = new ListActorsUseCase(listActorRepo);

const listActorsController = new ListActorsController(listActorsUseCase);

export { listActorsController };
