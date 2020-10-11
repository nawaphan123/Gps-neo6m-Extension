Blockly.defineBlocksWithJsonArray([
{
  "type": "gps_setup",
  "message0": "GPS setup (tx pin: %1 )",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "IN1",
          "32"
        ],
        [
          "IN2",
          "33"
        ],
        [
          "IN3",
          "34"
        ],
        [
          "IN4",
          "35"
        ],
        [
          "OUT1",
          "26"
        ],
        [
          "OUT2",
          "27"
        ],
        [
          "23",
          "23"
        ],
        [
          "19",
          "19"
        ],
        [
          "18",
          "18"
        ]
      ]
    }
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
}
]);
