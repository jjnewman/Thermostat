describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have a temperature of 20 degrees when created", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should be able to increase the temperature with the up button", function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it("should be able to increase the temperature with the down button", function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it("should have a minimum temperature of 10 degrees", function() {
    thermostat.temperature = 10;
    thermostat.down();
    expect(thermostat.temperature).toEqual(10);
  });

  it("should have power saving mode on by default", function() {
    expect(thermostat.powerSaving).toBe(true);
  })

  it("should be able to turn power saving off", function() {
    thermostat.powersavingOff();
    expect(thermostat.powerSaving).toBe(false);    
  });

  it("should have a max temp of 25 when power saving is on", function() {
    thermostat.temperature = 25;
    thermostat.up();
    expect(thermostat.temperature).toEqual(25);
  });

  it("should have a max temp of 32 when power saving is off", function() {
    thermostat.temperature = 32;
    thermostat.powersavingOff;
    thermostat.up();
    expect(thermostat.temperature).toEqual(32);
  });

  it("should be able to reset the temperature to 20 by hitting the reset button", function() {
    thermostat.resetTemp();
    expect(thermostat.temperature).toEqual(20);

  });

});