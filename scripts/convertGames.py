import json

new_Data = []

with open('ps4.json') as json_file:
    data = json.load(json_file)
    for d in data:
        n = {
            'slug': d['slug'],
            'name': d['name'],
            'playtime': d['playtime'],
            'platforms': d['platforms'],
            'released': d['released'],
            'metacritic': d['metacritic'],
            'genres': d['genres'],
            'background_image': d['background_image']
        }
        new_Data.append(n)

with open('gamesData.json', 'w') as outfile:
    json.dump(new_Data, outfile, indent=4)
