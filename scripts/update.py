import requests
import json
import bson

url = 'http://localhost:5000/api/genres/all'
response = requests.request("GET", url).json()
genres = response

url = 'http://localhost:5000/api/platforms/all'
response = requests.request("GET", url).json()
platforms = response

print(genres)
print(platforms)

with open('gamesData.json') as json_file:
    games = json.load(json_file)

    newData = []

    for game in games:
        n = {
            'slug': game['slug'],
            'name': game['name'],
            'playtime': game['playtime'],
            'platforms': [],
            'released': game['released'],
            'metacritic': game['metacritic'],
            'genres': [],
            'background_image': game['background_image']
        }

        for g in game['genres']:
            ng = {
                '_id': "",
                'slug': g['slug'],
                'name': g['name']
            }
            for genre in genres:
                if genre['slug'] == g['slug']:
                    ng['_id'] = bson.ObjectId(genre['_id'])
            n['genres'].append(ng)

        for p in game['platforms']:
            np = {
                '_id': "",
                'slug': p['slug'],
                'name': p['name']
            }
            for platform in platforms:
                if platform['slug'] == p['slug']:
                    np['_id'] = bson.ObjectId(platform['_id'])
            n['platforms'].append(np)

        newData.append(n)

with open('gamesData.bson', 'w') as outfile:
    bson.dumps(json.dumps(newData), outfile)

'''for n in games:
    url = 'http://localhost:5000/api/games/insert'
    x = requests.post(url, data=n)

print(x.text)'''


