'use strict';

describe('call function', function () {
    it('should the returned title be a match with the title asociated to that url', function () {
        var urls = [
            {
                url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object',
                title: 'Object'
            },
            {
                url: 'https://developer.mozilla.org/en-US/docs/Glossary/array', title: 'Array'
            },
            {
                url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', title: 'JavaScript'
            },
            {
                url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random',
                title: 'Math.random()'
            }
        ];


        var index = Math.floor(Math.random() * 4);




    });
});