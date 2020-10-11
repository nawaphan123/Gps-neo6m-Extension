Blockly.Python['gps_setup'] = function(block) {
  Blockly.Python.definitions_['import_GPS'] = 'import GPS';

  var dropdown_pin = block.getFieldValue('pin');

  var code = `GPS.config(${dropdown_pin})\n`;
  return code;
};

Blockly.Python['gps_is_ready'] = function(block) {
  Blockly.Python.definitions_['import_GPS'] = 'import GPS';

  var code = `GPS.position()[0] != None`;
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['gps_position'] = function(block) {
  Blockly.Python.definitions_['import_GPS'] = 'import GPS';

  var dropdown_type = block.getFieldValue('type');

  var code = `GPS.position()[${dropdown_type}]`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['gps_speed'] = function(block) {
  Blockly.Python.definitions_['import_GPS'] = 'import GPS';

  var code = `GPS.speed()`;
  return [code, Blockly.Python.ORDER_NONE];
};
