import requests

def fetch_codeforces_data(username,enrollment_no):
    # Define the API URL you want to fetch data from
    api_url = "https://codeforces.com/api/user.info?handles="+username
    # Make a GET request to the API
    response = requests.get(api_url)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Parse the JSON data from the response (assuming the API returns JSON)
        data = response.json()
        supabase={
            "enrollment_no":enrollment_no ,
            "username":username,
            "rating":data['result'][0]['rating'],
            "maxRating":data['result'][0]['maxRating'],
            "rank":data['result'][0]['rank'],
            "maxRank":data['result'][0]['maxRank'],
        }
        # Now you can work with the data
        return supabase
    else:
        return ("Failed to fetch data from the API. Status code:", response.status_code)

def fetch_leetcode_data(username,enrollment):
    api_url = "https://leetcode-api-faisalshohag.vercel.app/"+username

    response = requests.get(api_url)
    

    if response.status_code == 200:
        data = response.json()
        supabase={
            "enrollment_no":enrollment ,
            "username":username,
            "rank":data['ranking'],
            "easySolved":data['easySolved'],
            "mediumSolved":data['mediumSolved'],
            "hardSolved":data['hardSolved'],
            "totalSolved":data['totalSolved'],
        }

        return supabase
    else:
        return ("Failed to fetch data from the API. Status code:", response.status_code)

def fetch_codechef_data(username,enrollment):
    api_url = "https://codechef-api.vercel.app/"+username

    response = requests.get(api_url)

    if response.status_code == 200:
        data = response.json()
        supabase={
            "enrollment_no":enrollment ,
            "username":username,
            "currentRating":data['currentRating'],
            "highestRating":data['highestRating'],
            "globalRank":data['globalRank'],
            "countryRank":data['countryRank'],
            "stars":data['stars'],
        }

        return supabase
    else:
        return ("Failed to fetch data from the API. Status code:", response.status_code)


