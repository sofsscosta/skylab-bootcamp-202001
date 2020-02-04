'use strict'
describe('register', function() {
    it("Should add the different inputs in the user", function() {
        // Añadir done cuando sea asíncrono
        register("kike", "kike", "kike", "123", function(results) {
            expect(results.length).toBe(4);
            results.forEach(function(result) {
                expect(typeof result.name).toBe("kike")
            })
        })
    });
});

