export default function() {
  this.get('/pets', function(){
    return {
      data: [{
        type: 'pets',
        id: 1,
        attributes:{
          name: 'Lilo Castillo',
          owner: 'Alexandra Collado',
          breed: 'Mixed',
          age: 10
        }
      },
      {
        type: 'pets',
        id: 2,
        attributes: {
          name: 'Ace Castillo',
          owner: 'Nestor Castillo',
          breed: 'Mixed',
          age: 15
        }
      },
      {
        type: 'pets',
        id: 3,
        attributes: {
          name: 'Lola Collado',
          owner: 'Ramon Collado',
          breed: 'Mixed',
          age: 13
        }
      }]
    };
  });
}

