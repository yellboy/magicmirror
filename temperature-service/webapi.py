from flask import Flask
app = Flask(__name__)

@app.route("/<name>", methods=['GET'])
def hello_world(name):
    return 'Hello ' + name;

if __name__ == "__main__":
	app.run()