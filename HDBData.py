import requests

class HDBData:
  @staticmethod
  def getData(callback):
    # make a request to the HDB DataMall API to retrieve the HDB data
    data = requests.get('https://api.data.gov.sg/v1/hdb/prices')
    data = data.json()

    # process the data and return it to the callback function
    processedData = []
    for row in data['items']:
      processedData.append({
        'location': row['location'],
        'type': row['type'],
        'size': row['size'],
        'price': row['price']
      })
    callback(processedData)
