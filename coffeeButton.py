import RPi.GPIO as GPIO
import time
from Naked.toolshed.shell import muterun_js

GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(23, GPIO.IN, pull_up_down=GPIO.PUD_UP)

while True:
	inputStateRed=GPIO.input(18)
	inputStateBlue=GPIO.input(23)
	if inputStateRed == False:
		print('Red Button Pressed')
		muterun_js('/home/pi/Documents/coffee/coffeeOut.js')
		time.sleep(0.2)
	elif inputStateBlue == False:
		print('Black Button Pressed')
		muterun_js('/home/pi/Documents/coffee/coffeeIn.js')
		time.sleep(0.2)
