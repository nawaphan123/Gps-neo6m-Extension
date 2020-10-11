# Dev by Sonthaya Nongncuh, www.ioxhop.com
from machine import UART
import re

uart = None
lat = None
lng = None
speedkm = None

def config(tx_pin):
    global uart
    uart = UART(2, 9600, rx=tx_pin, tx=-1)

def check():
    global lat, lng, speedkm

    if not uart:
        return
    global lat, lng, speed
    while True:
        line = uart.readline()
        if not line:
            break

        regex = r"\$GPRMC,([0-9\.]+)?,([VA]),(([0-9.]+)([0-9]{2}\.[0-9]+))?,([NS])?,(([0-9.]+)([0-9]{2}\.[0-9]+))?,([EW])?,([0-9.]+)?,([0-9.]+)?,([0-9.]+)?,([0-9.]+)?,([0-9.]+)?,(.*)?"
        match = re.match(regex, line)
        if match:
            mode = match.group(2)
            if mode == b"A":
                lat = round(float(match.group(4)) + float(match.group(5)) / 60, 6)
                lng = round(float(match.group(8)) + float(match.group(9)) / 60, 6)
                speedkm = round(float(match.group(11)), 2)
            else:
                lat = None
                lng = None
                speedkm = None

def position():
    check()
    return (lat, lng)

def speed():
    check()
    return speedkm
