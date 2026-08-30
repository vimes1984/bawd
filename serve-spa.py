#!/usr/bin/env python3
"""BAWD v2 static server with SPA fallback — serves dist, unknown paths → index.html."""
import http.server, os, sys

ROOT = sys.argv[1] if len(sys.argv) > 1 else "/root/.openclaw/workspace/archives/bawd-v2/dist/bawd-v2/browser"
PORT = int(sys.argv[2]) if len(sys.argv) > 2 else 8091

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def translate_path(self, path):
        # Resolve against ROOT; strip query string
        import posixpath, urllib.parse
        path = urllib.parse.urlparse(path).path
        parts = posixpath.normpath(path).split("/")
        parts = [p for p in parts if p not in ("", ".")]
        return os.path.join(ROOT, *parts)

    def send_head(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            path = os.path.join(path, "index.html")
        if not os.path.exists(path):
            # SPA fallback: unknown route → index.html (but keep real files)
            path = os.path.join(ROOT, "index.html")
        # Serve via SimpleHTTPRequestHandler internals without re-translating
        try:
            f = open(path, "rb")
        except OSError:
            self.send_error(404, "File not found")
            return None
        import mimetypes
        ctype = mimetypes.guess_type(path)[0] or "application/octet-stream"
        fs = os.fstat(f.fileno())
        self.send_response(200)
        self.send_header("Content-type", ctype)
        self.send_header("Content-Length", str(fs[6]))
        self.send_header("Last-Modified", self.date_time_string(fs.st_mtime))
        self.end_headers()
        return f

    def log_message(self, fmt, *args):
        sys.stderr.write("%s\n" % (fmt % args))

if __name__ == "__main__":
    http.server.ThreadingHTTPServer(("0.0.0.0", PORT), SPAHandler).serve_forever()
