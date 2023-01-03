"""
@file: launch-demo.py
@description: A script to launch KeepId json library demo websites.
@author: KeepId Inc.
@date: December 31, 2022
"""

import http.server
import socketserver

PORT = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="demo", **kwargs)

with socketserver.TCPServer(("", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
    print("Serving at port", PORT)
    httpd.serve_forever()
