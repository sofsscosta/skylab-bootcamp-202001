describe('retrive-vehicles', function() {

  it("should match the id", function(done) {

    var ids = ["FYF20", "FYG52", "GMR67", "FYF69", "FYF90", "FYG20", "FYG73", "FYC17", "FYC35", "FYF18", "FYF00", "FYF02", "FYG76", "FYG06", "FYD79", "FYC49", "GBT54", "GBT56", "FYF96", "FYD76", "GBT41", "GBT81", "GBT79", "FYJ46", "FYF79", "FYF73", "FYB65", "FYC64", "FYF80", "FYB42", "FYF17", "FYC79", "FYD34", "FYG49", "FYF98", "FYC13", "FYD27", "FYD01", "FYC18", "FYG64", "FJW55", "FYC04", "GFB77", "FYC36", "FYC31", "FYC58", "FYD04", "FJY54", "FJY34", "FJY68", "FKC06", "FJW89", "FJW01", "FJY52", "FKB03", "DVD03", "FJY22", "FYJ50", "FJW78", "FKC13", "FKB04", "FJY88", "FJV62", "FJV98", "FJX55", "FJX62", "FJX61", "FJX27", "FJX59", "FRR90", "FKC11", "FKC12", "FJW27", "FKB38", "FGX72", "FJX58", "FJY43", "FJY44", "FJX34", "FJX57", "FJX60", "FLG52", "FJX56", "FJX63", "FJX31", "FJW36", "FJW44", "FJX70", "FJV57", "FJX33", "FKB31", "FJW33", "FJY23", "FJX18", "FJX76", "FJW07", "FJX90", "FJX94", "FJV39", "FJX87"]
    var id = ids.random();

    retrieveVehicle(id, function(vehicle) {
      expect(id).toBe(vehicle.id)

      expect(typeof vehicle.name).toBe("string")
      expect(typeof vehicle.price).toBe("number")
      expect(typeof vehicle.collection).toBe("string")
      expect(typeof vehicle.description).toBe("string")

      done()
    })
    
    
  });

  it("should be an error when no found", function(done) {

    retrieveVehicle('non-id', function(vehicle) {
      expect(vehicle).toBe(null);
      done()
    })
    
  })

  

})