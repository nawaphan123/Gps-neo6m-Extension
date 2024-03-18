Blockly.Python['gps_setup'] = function(block) {
  Blockly.Python.definitions_['import_GPS'] = 'import GPS';

  var dropdown_pin = block.getFieldValue('pin') || Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var dropdown_pin2 = block.getFieldValue('pin2') || Blockly.Python.valueToCode(block, 'pin2', Blockly.Python.ORDER_ATOMIC);

  var code = `GPS.config(${dropdown_pin},${dropdown_pin2})\n`;
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


Blockly.JavaScript['gps_setup'] = function(block) {
  Blockly.JavaScript.definitions_['include']['SoftwareSerial.h'] = '#include <SoftwareSerial.h>';
  Blockly.JavaScript.definitions_['include']['TinyGPS.h'] = '#include <TinyGPS.h>';
  
  var dropdown_pin = block.getFieldValue('pin') || Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_pin2 = block.getFieldValue('pin2') || Blockly.JavaScript.valueToCode(block, 'pin2', Blockly.JavaScript.ORDER_ATOMIC);

  Blockly.JavaScript.definitions_['define']['gps'] = `TinyGPS gps;`;
  Blockly.JavaScript.definitions_['define']['gpsSerial'] = `SoftwareSerial gpsSerial(${dropdown_pin}, ${dropdown_pin2});`;

  var code = `gpsSerial.begin(9600);\n`;
  return code;
};

Blockly.JavaScript['gps_is_ready'] = function(block) {
  var functionName = Blockly.JavaScript.provideFunction_(
    `gps_is_ready`,
    [
      'bool ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '() {',
      '  bool newData = false;',
      '  for (unsigned long start = millis(); millis() - start < 1000;) {',
      '    while (gpsSerial.available()) {',
      '      char c = gpsSerial.read();',
      '      if (gps.encode(c)) {',
      '        newData = true;',
      '      }',
      '    }',
      '  }',
      '  return newData;',
      '}',
    ]
  );

  var code = `${functionName}()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['gps_position'] = function(block) {
  var dropdown_type = block.getFieldValue('type');

  var functionName = Blockly.JavaScript.provideFunction_(
    `gps_get_position`,
    [
      'bool ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(int inx) {',
      '  float flat, flon;',
      '  unsigned long age;',
      '  gps.f_get_position(&flat, &flon, &age);',
      '  return inx == 0 ? flat : flon;',
      '}',
    ]
  );

  var code = `${functionName}(${dropdown_type})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['gps_speed'] = function(block) {
  var code = `gps.f_speed_kmph()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['gps_distance'] = function(block) {
  var value_lat1 = Blockly.JavaScript.valueToCode(block, 'lat1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_lng1 = Blockly.JavaScript.valueToCode(block, 'lng1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_lat2 = Blockly.JavaScript.valueToCode(block, 'lat2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_lng2 = Blockly.JavaScript.valueToCode(block, 'lng2', Blockly.JavaScript.ORDER_ATOMIC);

  var code = `gps.distance_between(${value_lat1}, ${value_lng1}, ${value_lat2}, ${value_lng2})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['gps_get_hour'] = function(block) {
  var functionName = Blockly.JavaScript.provideFunction_(
    `gps_get_hour`,
    [
      'int ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '() {',
      '  byte hour;',
      '  gps.crack_datetime(NULL, NULL, NULL, &hour, NULL, NULL, NULL, NULL);',
      '  return hour;',
      '}',
    ]
  );

  var code = `${functionName}()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['gps_get_min'] = function(block) {
  var functionName = Blockly.JavaScript.provideFunction_(
    `gps_get_min`,
    [
      'int ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '() {',
      '  byte min;',
      '  gps.crack_datetime(NULL, NULL, NULL, NULL, &min, NULL, NULL, NULL);',
      '  return min;',
      '}',
    ]
  );

  var code = `${functionName}()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['gps_get_sec'] = function(block) {
  var functionName = Blockly.JavaScript.provideFunction_(
    `gps_get_sec`,
    [
      'int ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '() {',
      '  byte sec;',
      '  gps.crack_datetime(NULL, NULL, NULL, NULL, NULL, &sec, NULL, NULL);',
      '  return sec;',
      '}',
    ]
  );

  var code = `${functionName}()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['gps_get_day'] = function(block) {
  var functionName = Blockly.JavaScript.provideFunction_(
    `gps_get_day`,
    [
      'int ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '() {',
      '  byte day;',
      '  gps.crack_datetime(NULL, NULL, &day, NULL, NULL, NULL, NULL, NULL);',
      '  return day;',
      '}',
    ]
  );

  var code = `${functionName}()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['gps_get_month'] = function(block) {
  var functionName = Blockly.JavaScript.provideFunction_(
    `gps_get_month`,
    [
      'int ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '() {',
      '  byte month;',
      '  gps.crack_datetime(NULL, &month, NULL, NULL, NULL, NULL, NULL, NULL);',
      '  return month;',
      '}',
    ]
  );

  var code = `${functionName}()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['gps_get_year'] = function(block) {
  var functionName = Blockly.JavaScript.provideFunction_(
    `gps_get_year`,
    [
      'int ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '() {',
      '  int year;',
      '  gps.crack_datetime(&year, NULL, NULL, NULL, NULL, NULL, NULL, NULL);',
      '  return year;',
      '}',
    ]
  );

  var code = `${functionName}()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};


