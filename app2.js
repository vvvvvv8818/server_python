import http.server
from urllib.parse import urlparse

# BaseHTTPRequestHandler 상속 받음
# do_GET을 오버라이딩. http의 get요청 들어오면 실행 되는 함수
class MyHandler(http.server.BaseHTTPRequestHandler):
	def do_GET(self):
		parsed_path = urlparse(self.path)

		print (self.client_address);	# ('ip', port)
		print (type(self.client_address));	# <class 'tuple'>

		message_parts = ['Client address : ' + self.client_address[0],
						'Command : {0:s}'.format(self.command),
						'request vrsion : {0:s}'.format(self.request_version),
						'server version : {0:s}'.format(self.server_version),
						'sys version : {0:s}'.format(self.sys_version),
						'protocol vrsion : {0:s}'.format(self.protocol_version)]

		message = '\n'.join(message_parts)
		self.send_response(200)	# response code
		self.end_headers()		# 헤더가 본문을 구분
		self.wfile.write(message.encode('utf-8'))	# 응답소켓을 감싸는 파일 핸들 wfile
		return None

s = http.server.HTTPServer(('localhost', 8080), MyHandler)
s.serve_forever()
