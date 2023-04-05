/** This is abstract Player class */

export class Player {
  constructor(name, sign) {
    if(this.constructor === Player) throw new Error('This is abstract class');

    this.name = name;
    this.sign = sign;
  }

  getMoveIndex() {
    throw new Error('Abstract method');
  }
}