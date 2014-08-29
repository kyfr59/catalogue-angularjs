
describe("Test de l'appli telApp - ", function() { // Description du groupe de test

  beforeEach(module('telApp')); // Introduction de l'application

  it("doit avoir 3 téléphones dans la liste", inject(function($controller) { // Injection du controlleur
    var scope = {}, 
        ctrl = $controller('listController', {$scope:scope}); // Definition de la portée

  expect(scope.phones.length).toBe(3); // Réalisation du test

  }));
    
  
});


