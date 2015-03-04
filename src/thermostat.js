var Thermostat = function() {
  this.temperature = 20
  this.powerSaving = true
};

Thermostat.prototype.up = function() {
  this.temperature += 1;
  this.temperature = (this.powerSaving) ? Math.min(25, this.temperature) : Math.min(32, this.temperature); 
};

Thermostat.prototype.down = function() {
  this.temperature > 10 ? this.temperature -= 1 : this.temperature
};

Thermostat.prototype.powersavingOff = function() {
  this.powerSaving = false;
};

Thermostat.prototype.powersavingOn = function() {
  this.powerSaving = true;
  this.temperature > 25 ? this.temperature = 25 : this.temperature
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};

Thermostat.prototype.colour =  function() {
  return (this.temperature < 18 ? 'GREEN' : this.temperature < 25 ? 'YELLOW' : 'RED')
};
