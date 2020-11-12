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

Blockly.Python['gps_distance'] = function(block) {
  Blockly.Python.definitions_['import_GPS'] = 'import GPS';

  var value_lat1 = Blockly.Python.valueToCode(block, 'lat1', Blockly.Python.ORDER_ATOMIC);
  var value_lng1 = Blockly.Python.valueToCode(block, 'lng1', Blockly.Python.ORDER_ATOMIC);
  var value_lat2 = Blockly.Python.valueToCode(block, 'lat2', Blockly.Python.ORDER_ATOMIC);
  var value_lng2 = Blockly.Python.valueToCode(block, 'lng2', Blockly.Python.ORDER_ATOMIC);

  var code = `GPS.distance(${value_lat1}, ${value_lng1}, ${value_lat2}, ${value_lng2})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['gps_get_hour'] = function(block) {
  Blockly.Python.definitions_['import_GPS'] = 'import GPS';

  var code = 'GPS.datetime()[3]';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['gps_get_min'] = function(block) {
  Blockly.Python.definitions_['import_GPS'] = 'import GPS';

  var code = 'GPS.datetime()[4]';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['gps_get_sec'] = function(block) {
  Blockly.Python.definitions_['import_GPS'] = 'import GPS';

  var code = 'GPS.datetime()[5]';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['gps_get_day'] = function(block) {
  Blockly.Python.definitions_['import_GPS'] = 'import GPS';

  var code = 'GPS.datetime()[2]';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['gps_get_month'] = function(block) {
  Blockly.Python.definitions_['import_GPS'] = 'import GPS';

  var code = 'GPS.datetime()[1]';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['gps_get_year'] = function(block) {
  Blockly.Python.definitions_['import_GPS'] = 'import GPS';

  var code = 'GPS.datetime()[0]';
  return [code, Blockly.Python.ORDER_NONE];
};
