import json
from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
from flask import Flask,jsonify,request

from trata_texto import *

app = Flask(__name__)

@app.route('/search', methods=['GET'])
def search():
    args = request.args
    message = args.get("text")
    message = processar_texto(message)
    return message

if __name__ == '__main__':
   app.run(port = 5001)
