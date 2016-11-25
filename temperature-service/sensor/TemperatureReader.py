import Adafruit_DHT as dht


def readTemperature():
    h,t = dht.read_retry(dht.DHT22, 4);
    return t;

def readHumidity():
    h,t = dht.read_retry(dht.DHT22, 4);
    return h;