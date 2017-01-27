from flask import Flask
from flask_cors import CORS, cross_origin
from flask import jsonify
from resource.TemperatureResponse import TemperatureResponse
from sensor.TemperatureReader import readTemperature

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/status", methods=['GET'])
def status():
    response = {"Message": "It works"}
    return jsonify(response);


@app.route("/temperature", methods=['GET'])
def temperature():
    response = TemperatureResponse(readTemperature(), "It is hot outside!").serializeToDictionary()
    return jsonify(response);


if __name__ == "__main__":
    app.run()
