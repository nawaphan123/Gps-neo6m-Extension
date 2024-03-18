# Dev by Sonthaya Nongncuh, www.ioxhop.com
from machine import UART
import re
from math import sin, cos, sqrt, radians, atan2

uart = ""
lat = None
lng = None
speedkm = None
d = 0
m = 0
y = 0
hh = 0
mm = 0
ss = 0
timezone = 0

def config(tx_pin,rx_pin):
    global uart
    uart = UART(2, 9600, rx=rx_pin,tx=tx_pin)

def check():
    if uart == "":
        return "can not read data"
    global lat, lng, speedkm, d, m, y, hh, mm, ss
    while True:
        line = uart.read()
        if not line:
            break

        regex = r"\$G.RMC,([0-9\.]+)?,([VA]),([0-9\.]+),([NS]),([0-9\.]+),([EW]),([0-9\.]+),([0-9\.]+)?,([0-9]+)?"

        matches = re.search(regex, line)
        if matches:
            hh = int(matches.group(1)[0:2])
            mm = int(matches.group(1)[2:4])
            ss = int(matches.group(1)[4:6])
            if matches.group(2) == b"A":
                lat = matches.group(3).decode()
                dotIndex = lat.index(".")
                lat = float(lat[:dotIndex - 2]) + float(lat[dotIndex - 2:]) / 60
                if matches.group(4) == b"S":
                    lat = -lat

                lng = matches.group(5).decode()
                dotIndex = lng.index(".")
                lng = float(lng[:dotIndex - 2]) + float(lng[dotIndex - 2:]) / 60
                if matches.group(6) == b"W":
                    lng = -lng

            speedkm = float(matches.group(7))

            d = int(matches.group(9)[0:2])
            m = int(matches.group(9)[2:4])
            y = int(matches.group(9)[4:6])


def position():
    check()
    return (lat, lng)

def speed():
    check()
    return speedkm*2
    # if(speedkm > 20):
    #     return True
    # else:
    #     return False

def datetime():
    check()
    return (y, m, d, hh, mm, ss, 0, timezone)

def distance(lat1, lon1, lat2, lon2):
    lat1 = radians(lat1)
    lon1 = radians(lon1)
    lat2 = radians(lat2)
    lon2 = radians(lon2)

    dlon = lon2 - lon1
    dlat = lat2 - lat1

    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2.0 * atan2(sqrt(a), sqrt(1 - a))
    return 6373.0 * c
