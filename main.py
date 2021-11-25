import logging
import os
import sqlite3 as sl
from urllib.request import pathname2url

from flask import Flask, render_template, request


app = Flask(__name__, template_folder=os.path.abspath('static'))


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/update_note/<name>', methods=['POST'])
def update_note(name):
    content = request.args.get('content')
    note_file = open(f'{name}.txt', 'w')
    note_file.write(content)
    note_file.close()

    return 'Success'

@app.route('/get_note/<name>')
def get_note(name):
    filename = f'{name}.txt'
    if os.path.exists(filename):
        with open(f'{name}.txt', 'r') as note_file:
            return note_file.read()

    return ''

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5050, debug=False, use_reloader=False)