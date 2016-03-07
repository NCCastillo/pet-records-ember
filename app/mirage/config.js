export default function() {
  this.get('/pets', function(db, request){
    return {
      data: db.pets.map(attrs => (
        { type: 'pets', id: attrs.id, attributes: attrs }
      ))
    };
  });

