const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
      dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
      dinosaur2 = new Dinosaur('stegasaurus','herbavore',30)
      park = new Park('Jurassic Park',100,dinosaur)

  })

  it('should have a name', function(){
    const actual = park.name
    assert.strictEqual(actual,'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice
    assert.strictEqual(actual,100)
  });

  xit('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurCollection.name
    assert.strictEqual(actual,'t-rex')
  });

  it('should be able to add a dinosaur to its collection', function(){
    
    park.addADinosaur(dinosaur)
    const actual = park.dinosaurCollection[0].species
    assert.strictEqual(actual,'t-rex')
  });

  it('should be able to remove a dinosaur to its collection', function(){
    
    park.addADinosaur(dinosaur)
    park.addADinosaur(dinosaur2)
    park.removeADinosaur(dinosaur2)
    const actual = park.dinosaurCollection
    assert.deepStrictEqual(actual,[dinosaur])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    
    park.addADinosaur(dinosaur)
    park.addADinosaur(dinosaur2)
    
    const actual = park.mostPopularDinosaur()
    assert.deepStrictEqual(actual,[dinosaur])
  });

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
