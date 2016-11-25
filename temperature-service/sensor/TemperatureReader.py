import Adafruit_DHT as dht


def readTemperature():
    h,t = dht.read_retry(dht.DHT22, 22);
    return t;

def readHumidity():
    h,t = dht.read_retry(dht.DHT22, 22);
    return h;