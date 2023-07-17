class Actor {
  actor_id?: number;
  first_name: string;
  last_name: string;
  last_update?: Date;

  constructor() {
    if(!this.actor_id){
      this.last_update = new Date();
    }
  }
}

export { Actor };
