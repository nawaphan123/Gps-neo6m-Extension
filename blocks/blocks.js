Blockly.defineBlocksWithJsonArray([
{
  "type": "gps_setup",
  "message0": "GPS setup (tx pin: %1 rx pin: %2)",
  "args0": [
    [ "kidbright", "openkb" ].findIndex(a => boardId.startsWith(a)) >= 0 ? {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [ "IN1", "32" ],
        [ "IN2", "33" ],
        [ "IN3", "34" ],
        [ "IN4", "35" ],
        [ "OUT1", "26" ],
        [ "OUT2", "27" ],
        [ "23", "23" ],
        [ "19", "19" ],
        [ "18", "18" ]
      ]
    } : {
      "type": "input_value",
      "name": "pin",
      "check": "Number"
    },
    [ "kidbright", "openkb" ].findIndex(a => boardId.startsWith(a)) >= 0 ? {
      "type": "field_dropdown",
      "name": "pin2",
      "options": [
        [ "IN1", "32" ],
        [ "IN2", "33" ],
        [ "IN3", "34" ],
        [ "IN4", "35" ],
        [ "OUT1", "26" ],
        [ "OUT2", "27" ],
        [ "23", "23" ],
        [ "19", "19" ],
        [ "18", "18" ]
      ]
    } : {
      "type": "input_value",
      "name": "pin2",
      "check": "Number"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#5DADE2",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gps_is_ready",
  "message0": "GPS is ready ?",
  "output": "Boolean",
  "colour": "#5DADE2",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gps_position",
  "message0": "GPS get position  %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "latitude",
          "0"
        ],
        [
          "longitude",
          "1"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": "#5DADE2",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gps_speed",
  "message0": "GPS get speed (km/h)",
  "output": "Number",
  "colour": "#5DADE2",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gps_distance",
  "message0": "distance (km) %1 latitude1 %2 longitude1 %3 latitude2 %4 longitude2 %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "lat1",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "lng1",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "lat2",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "lng2",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": "#5DADE2",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gps_get_hour",
  "message0": "GPS get Hour",
  "inputsInline": false,
  "output": "Number",
  "colour": "#5DADE2",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gps_get_min",
  "message0": "GPS get Min",
  "inputsInline": false,
  "output": "Number",
  "colour": "#5DADE2",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gps_get_sec",
  "message0": "GPS get Second",
  "inputsInline": false,
  "output": "Number",
  "colour": "#5DADE2",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gps_get_day",
  "message0": "GPS get Day",
  "inputsInline": false,
  "output": "Number",
  "colour": "#5DADE2",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gps_get_month",
  "message0": "GPS get Month",
  "inputsInline": false,
  "output": "Number",
  "colour": "#5DADE2",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gps_get_year",
  "message0": "GPS get Year",
  "inputsInline": false,
  "output": "Number",
  "colour": "#5DADE2",
  "tooltip": "",
  "helpUrl": ""
}
]);
