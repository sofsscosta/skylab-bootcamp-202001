
if(typeof require !== 'undefined'){
    var Murray = require('./murray')
}

describe('Murray.concat',function(){
    it('should concatenate 2 murrays',function(){
        var murray = new Murray(1,2,3);
        var otherMurray = new Murray(4,5,6);
        var response = murray.concat(otherMurray);

        expect(response.length).toBe(6);
    });
    it('should the original murray be the same',function(){
        var frontmurray = new Murray('nodejs','js','angularjs');
        var backmurray = new Murray('mongodb','mysql');
        var response = frontmurray.concat(backmurray);

        expect(frontmurray[0]).toBe('nodejs');
        expect(frontmurray[1]).toBe('js');
        expect(frontmurray[2]).toBe('angularjs');
        expect(backmurray[0]).toBe('mongodb');
        expect(backmurray[1]).toBe('mysql');
    });
        
    }
);