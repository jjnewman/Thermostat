var Thermostat = function() {
  this.temperature = 20
  this.powerSaving = true
};

Thermostat.prototype.up = function() {
  if (this.powerSaving = true && this.temperature <25) {
      this.temperature += 1;  
    }
  else {
    if (this.powerSaving = false && this.temperature <32) {
      this.temperature += 1;  
    };
  };
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
    this.temperature -= 1;
  };
};

Thermostat.prototype.powersavingOff = function() {
  this.powerSaving = false;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};