class TemperatureResponse:
    def __init__(self, temperature="unknown", message="Default message."):
        self.temperature = temperature;
        self.message = message;

    def serializeToDictionary(self):
        dictionary = {}
        dictionary["temperature"] = self.temperature
        dictionary["message"] = self.message
        return dictionary;
