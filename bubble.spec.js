describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles a single item array', function() {
        expect( bubbleSort([1]) ).toEqual( [1] );
    });

    it('handles an array with multiple items', function() {
        expect( bubbleSort([55, 34, 8, 75, 4]) ).toEqual( [4, 8, 34, 55, 75] );
    });

    it('handles an array with multiple items', function() {
        expect( bubbleSort(['a', 'z', 'r', 'c', 'e']) ).toEqual( ['a', 'c', 'e', 'r', 'z'] );
    });
  });

