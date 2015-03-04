thermostat = new Thermostat();

console.log('this is working');

  $(document).ready(function() {
    showTemp();

  $("#increase").click(function() {
    thermostat.up();
    showTemp();
  });

  $("#decrease").click(function() {
    thermostat.down();
    showTemp();
  });

  $("#reset").click(function() {
    thermostat.resetTemp();
    showTemp();
  });

  $("#powersave").click(function() {
    checkPowerSave();
    showTemp();
  });

});

checkPowerSave = function() {
  $('#powersave').is(':checked') ? thermostat.powersavingOn() : thermostat.powersavingOff();    
};

showTemp = function() {
  $("#current_temp").text(thermostat.temperature);
};


