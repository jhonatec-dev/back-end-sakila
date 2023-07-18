import { Op } from "sequelize";
import { Actors } from "../../../../database/models/Actors";
import { Actor } from "../../models/Actor";
import { IActorRepository } from "../IActorsRepository";

class MySQLActorsRepository implements IActorRepository {
  async delete(id: string | number): Promise<Actor> {
    return Actors.destroy({
      where: {
        actor_id: id,
      },
    });
  }
  async findAll(name, order, limit) {
    let found, orderCriteria, whereCriteria, limitCriteria;
    if (order) {
      orderCriteria = [[order.split(":")[0], order.split(":")[1]]];
    }

    if (name) {
      whereCriteria = {
        [Op.or]: [
          {
            first_name: {
              [Op.substring]: `%${name}%`,
            },
          },
          {
            last_name: {
              [Op.substring]: `%${name}%`,
            },
          },
        ],
      };
    }

    if (limit) {
      limitCriteria = +limit
    }

    found = Actors.findAll({
      where: whereCriteria,
      order: orderCriteria,
      limit: limitCriteria,
    });

    return found;
  }
  async create(actor: Actor) {
    const newActor = await Actors.create({ ...actor });
    return newActor;
  }

  async findById(id: string) {
    const actor: Actors | null = await Actors.findByPk(id);
    return actor;
  }
}

export { MySQLActorsRepository };
