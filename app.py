# open url and read

import urllib.request

url = 'http://google.com'

def my_request(url):
	http_response = urllib.request.urlopen(url)
	byte_data	  = http_response.read()
	text_data	  = byte_data.decode('utf-8')
	return text_data

print (my_request(url))
