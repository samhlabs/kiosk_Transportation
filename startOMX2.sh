#! /bin/sh

sleep .1 #breath... give that damn processor a break already

sudo killall -TERM omxplayer.bin 2>/dev/null #Kill all previously running omxplayer instances

#sleep .1 #breath... give that damn processor a break already

#cat /bin/omxfifo | omxplayer -o local --win '300 0 1600 900' /media/PAGE/LINESHAFT_1318x900.mp4
#pipe a read from omxfifo by omxplayer

#omxplayer -o local --win '300 0 1600 900' /media/PAGE/LINESHAFT_1318x900.mp4 < cat /bin/omxfifo
#i think this is the same as above, just exhausting options

# sleep 1.5 #dev delay - just testing.
omxplayer -o local --win '96 0 1920 1080' /media/PiShare/railroads_no_caption.mp4 #launch the video // TO DO: replace this with variables for video and window size, or make easily replacable