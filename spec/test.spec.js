describe('new character', function(){
		it('should take in name and alignment ', function() {
          expect(Character('Priti', 'Evil')).toBe('Priti' + 'Evil');
        });
    it('enemies array should have length of 10', function(){
      expect(enemies.length).toBe(10);
    });
    it('Dice should return number between 1 and 20', function(){
      expect(priti.dice()).toBeGreaterThan(0);
    });
    it('Dice for enemey should return number between 1 and 20', function(){
      expect(enemy.dice()).toBeGreaterThan(0);
    });
    it('player attacks enemy player recieves damage when number is 10 or greater', function(){
      expect(priti.attack()).toBeGreaterThan()
    })
});


