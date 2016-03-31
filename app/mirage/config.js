export default function() {
  this.get('/pets', function(db){
    return {
      data: db.pets.map(attrs => (
        { type: 'pets', id: attrs.id, attributes: attrs }
      ))
    };
  });

  this.post('/pets', function(db, request){
    var data = JSON.parse(request.requestBody).data;

    db.pets.insert(data.attributes);

    return {
      data: db.pets.map(attrs => (
        { type: 'pets', id: attrs.id, attributes: attrs }
      ))
    };
  });

  this.get('/pets/:pet_id', function (db, request){
    let pet_id = request.params.pet_id;

    return {
      data: {
        type: 'pets',
        id: pet_id,
        attributes: db.pets.find(pet_id)
      }
    };
  });
}
