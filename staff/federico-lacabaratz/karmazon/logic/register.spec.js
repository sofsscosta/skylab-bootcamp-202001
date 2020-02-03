describe('register', () => {
    it("Should add the different inputs in the user", () => {

        register("antonio", "antonio", "antonio", "123", results => {
            expect(results.length).toBe(4)

            results.forEach(result => {
                expect(typeof result.name).toBe("antonio")
            })
        })
    })
})