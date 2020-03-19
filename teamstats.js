const team={
  _players:[ {firstName: 'Pablo',
            lastName: 'Sanchez',
  age: 11},
            {firstName: 'Pablo',
            lastName: 'Sanchez',
  age: 11},
            {firstName: 'Pablo',
            lastName: 'Sanchez',
  age: 11}, 
           ],
  _games:[{
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
},
         {
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
},
         {
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
}],
  get players(){
    return this._players;
  },
  
  get games(){
    return this._players;
  },
  
  addPlayer(firstName,lastName,age)
  {
    let player={
      firstName,
      lastName,
      age,
    }
  this.players.push(player);
},
  
  addGame(oppName,points,oppPoints){
    const game={
      oppName,
      points,
      oppPoints,
    }
    this.games.push(game);
  }
};

team.addPlayer('Alex','Cristian',24);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('John','Leslie',34);

console.log(team.players);

team.addGame("Sea Lions",23,34);

console.log(team.games);


/*OUTPUT:

[ { firstName: 'Pablo', lastName: 'Sanchez', age: 11 },
  { firstName: 'Pablo', lastName: 'Sanchez', age: 11 },
  { firstName: 'Pablo', lastName: 'Sanchez', age: 11 },
  { firstName: 'Alex', lastName: 'Cristian', age: 24 },
  { firstName: 'Lisa', lastName: 'Leslie', age: 44 },
  { firstName: 'John', lastName: 'Leslie', age: 34 } ]
[ { firstName: 'Pablo', lastName: 'Sanchez', age: 11 },
  { firstName: 'Pablo', lastName: 'Sanchez', age: 11 },
  { firstName: 'Pablo', lastName: 'Sanchez', age: 11 },
  { firstName: 'Alex', lastName: 'Cristian', age: 24 },
  { firstName: 'Lisa', lastName: 'Leslie', age: 44 },
  { firstName: 'John', lastName: 'Leslie', age: 34 },
  { oppName: 'Sea Lions', points: 23, oppPoints: 34 } ]
  
 *.
