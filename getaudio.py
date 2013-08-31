#! /usr/bin/env python3

import re
import urllib.request
from time import sleep
from urllib.parse import quote

AUDIO = re.compile("\"audio/(.*?\.ogg)\"", re.DOTALL)
COMMONS = re.compile(\
  "\"(//upload.wikimedia.org/wikipedia/commons/.*?\.ogg)\"", \
  re.DOTALL | re.MULTILINE)

def getfile(filename):
  opener = urllib.request.build_opener()
  opener.addheaders = [('User-agent', 'Droid')]
  url = "http://commons.wikimedia.org/wiki/File:" + quote(filename)
  commons = opener.open(url).read().decode('utf-8')
  result = COMMONS.search(commons)
  if result:
    url = "http:" + result.group(1)
    print("Качаемо " + filename + "..")
    ogg = opener.open(url).read()
    f = open("audio/" + filename, "wb")
    f.write(ogg)
    f.close()

for line in open("Ukrainian.html").readlines():
  result = AUDIO.search(line)
  if result:
    filename = result.group(1)
    getfile(result.group(1))
    print("Спимо 1 секунду..")
    sleep(1)

