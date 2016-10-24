from flask import Flask
from flask import jsonify
from resource.TemperatureResponse import TemperatureResponse
from sensor.TemperatureReader import readTemperature

app = Flask(__name__)


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
