TEMP_INC = 1
MAX_TEMP_POWERSAVE_ON = 25
MAX_TEMP_POWERSAVE_OFF = 32
MIN_TEMP = 10
RESET_TEMP = 20
GREEN_TEMP = 18
RED_TEMP = 25

var Thermostat = function() {
  this.temperature = RESET_TEMP
  this.powerSaving = true
};

Thermostat.prototype.up = function() {
  this.temperature += TEMP_INC;
  this.temperature = (this.powerSaving) ? Math.min(MAX_TEMP_POWERSAVE_ON, this.temperature) : Math.min(MAX_TEMP_POWERSAVE_OFF, this.temperature); 
};

Thermostat.prototype.down = function() {
  this.temperature > MIN_TEMP ? this.temperature -= TEMP_INC : this.temperature
};

Thermostat.prototype.powersavingOff = function() {
  this.powerSaving = false;
};

Thermostat.prototype.powersavingOn = function() {
  this.powerSaving = true;
  this.temperature > MAX_TEMP_POWERSAVE_ON ? this.temperature = MAX_TEMP_POWERSAVE_ON : this.temperature
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = RESET_TEMP;
};

Thermostat.prototype.colour =  function() {
  return (this.temperature < GREEN_TEMP ? 'GREEN' : this.temperature < RED_TEMP ? 'YELLOW' : 'RED')
};
