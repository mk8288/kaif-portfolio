#!/usr/bin/env python3
"""Simple HTTP server that stays alive."""
import http.server
import socketserver
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
DIR = sys.argv[2] if len(sys.argv) > 2 else '.'

os.chdir(DIR)
socketserver.TCPServer.allow_reuse_address = True

class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        print(f"[{self.log_date_time_string()}] {args[0]} {args[1]} {args[2]}", flush=True)

with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
    print(f"Serving at http://0.0.0.0:{PORT} from {os.getcwd()}", flush=True)
    httpd.serve_forever()