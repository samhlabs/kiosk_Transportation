#!/bin/bash

#/media/PiShare/Git/kiosk_LineShaft/dbuscontrol.sh togglesubtitles
/media/PiShare/Git/kiosk_LineShaft/dbuscontrol.sh showsubtitles #using dbus controller to send key strokes to omxplayer syntax: dbuscontrol.sh <variable>
#echo -n "+" > /bin/omxfifo
exit 0