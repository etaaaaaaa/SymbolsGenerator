const possibleTypes = {
  Bowman: [25, 25, 'Bowman'],
  Swordsman: [40, 10, 'Swordman'],
  Magician: [10, 40, 'Magician'],
  Daemon: [10, 40, 'Deamon'],
  Undead: [25, 25, 'Undead'],
  Zombie: [40, 10, 'Zombie'],
}

class Person {
  constructor(type) {
    if (!possibleTypes.hasOwnProperty(type)) { throw new Error('Unavailable character type!')}
    this.type = type
    this.health = 100
    this.level = 1
    this.name = possibleTypes[type][2]
    this.defence = possibleTypes[type][1]
    this.attack = possibleTypes[type][0]
  }
}

class Team {
  constructor() {
    this.members = new Set()
  }

  * [Symbol.iterator]() {
    for (const member of this.members) {
      yield member
    }
  }

  add(character) {
    for (const member of this.members) {
      if (JSON.stringify(character) === JSON.stringify(member)) { throw new Error('This character has already been added') }
    }
    this.members.add(character)
  }
}