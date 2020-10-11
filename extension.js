({
    name: "GPS", // Category Name
    description: "Get latitude longitude and speed from GPS module",
    author: "IOXhop.com",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#5DADE2", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "gps_setup",
        "gps_is_ready",
        "gps_position",
        "gps_speed"
    ]
});
