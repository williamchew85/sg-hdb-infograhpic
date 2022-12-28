import requests

class HDBData:
  @staticmethod
  def getData(callback):
    # make a request to the HDB DataMall API to retrieve the HDB data
    data = requests.get('https://api.data.gov.sg/v1/hdb/data')
    data = data.json()

    # process the data and return it to the callback function
    processedData = []
    for row in data['items']:
      processedData.append({
        'location': row['location'],
        'type': row['type'],
        'size': row['size'],
        'sales_price': row['sales_price'],
        'rental_price': row['rental_price'],
        'demographics': row['demographics'],
        'infrastructure': row['infrastructure'],
        'building_details': row['building_details']
      })
    callback(processedData)
