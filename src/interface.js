thermostat = new Thermostat();

showTemp = function() {
  $("#current_temp").text(thermostat.temperature + " C ");
  tempColor();
};

checkPowerSave = function() {
  $('#powersave').is(':checked') ? thermostat.powersavingOn() : thermostat.powersavingOff();    
};

tempColor = function() {
  if(thermostat.temperature >= RED_TEMP) {
    $("#current_temp").css("color", "red");
  }
  if(thermostat.temperature >= GREEN_TEMP && thermostat.temperature < RED_TEMP) {
    $("#current_temp").css("color", "orange");
  }
  if(thermostat.temperature < GREEN_TEMP) {
    $("#current_temp").css("color", "green");
  }
};

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
