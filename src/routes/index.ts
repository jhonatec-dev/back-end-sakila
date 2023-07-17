import { Router } from "express";
import { actorRoutes } from "./actors.routes";

const router = Router();

router.use("/actors", actorRoutes);

export { router };
