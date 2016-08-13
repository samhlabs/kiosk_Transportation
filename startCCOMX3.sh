#! /bin/sh

sleep .1 #breath... give that damn processor a break already
sudo killall -TERM omxplayer.bin 2>/dev/null #Kill all previously running omxplayer instances
sleep .1 #breath... give that damn processor a break already
omxplayer -o local --win '96 0 1920 1080' /media/PiShare/roads_only_has_captions.mp4 #launch the video // TO DO: replace this with variables for video and window size, or make easily replacable
#omxplayer -o local --win '300 0 1920 1080' http://downloads.martindigital.co/insta2.mp4 #launch the video // TO DO: replace this with variables for video and window size, or make easily replacable