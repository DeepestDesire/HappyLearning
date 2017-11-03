#!/usr/bin/env python
# -*- coding: utf-8 -*-

import urllib2
import urllib
import time
import json


def getResponse(url):
	data={}
	data['api_key']=key
	data['api_secret']=secret
	data['return_attributes']=attributes
	data['image_url']=image_url
	req=urllib2.Request(http_url,urllib.urlencode(data))
	try:
		resp=urllib2.urlopen(req, timeout=5)
		qrcont=resp.read()
		return qrcont

	except urllib2.HTTPError as e:
	    print e.read()


def parseJson(str):
	obj = json.loads(str)
	faces = obj['faces']
	attributes = faces[0]['attributes']
	facequality = attributes['facequality']
	value = facequality['value']
	if value>50:
		return True
	else:
		return False

http_url='https://api-cn.faceplusplus.com/facepp/v3/detect'
key = "v6-KQmykzj2pYWIB-i6RW2lCc-3q0UcB"
secret = "q_XhGxs0Gg02WmRNMFNqcHirGyNGynhP"
attributes = "gender,age,smiling,headpose,facequality,blur"
image_url = "https://upload.ibesteeth.com////doctor/overview/middle_column/147282640046803362105.jpg"

for url in [image_url,image_url,image_url]:
	str1 = getResponse(url)
	result = parseJson(str1)
	if result:
		print url












