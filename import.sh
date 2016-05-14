# imports data from seed.json to 'remotebase' db
mongoimport --db remotebase --collection companies --drop --file seed.json --jsonArray
