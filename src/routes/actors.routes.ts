import { Router } from "express";
import { createActorController } from "../modules/actors/useCases/createActor";
import { listActorsController } from "../modules/actors/useCases/listActors";
import { listSingleActorController } from "../modules/actors/useCases/listSingleActor";

const actorRoutes = Router();

actorRoutes.get("/", (req, res) => {
  return listActorsController.handle(req, res);
})

actorRoutes.get("/:id", (req, res) => {
  return listSingleActorController.handle(req, res);
})

actorRoutes.post("/", (req, res) => {
  return createActorController.handle(req, res);
})

export { actorRoutes };
