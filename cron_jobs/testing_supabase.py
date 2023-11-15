import os
from supabase import create_client, Client
from fetching_data import *

# url=process.env.SUPABASE_URL
# key=process.env.SUPABASE_KEY
url:str = os.environ.get("SUPABASE_URL")
key:str = os.environ.get("SUPABASE_KEY")


supabase: Client = create_client(url, key)
response = supabase.table('userData').select("*").execute()

def write_codeforces_data(row):
    data, count = supabase.table('codeforces').upsert([row]).execute()
    return 

def write_leetcode_data(row):
    data, count = supabase.table('leetcode').upsert([row]).execute()
    return

def write_codechef_data(row):
    data, count = supabase.table('codechef').upsert([row]).execute()
    return



# # print(response.data[0])

def updateData(response):
    for i in range(len(response.data)):
        print(response.data[i])
        try:
            cfData=fetch_codeforces_data(response.data[i]['codeforces_handle'],response.data[i]['enrollment_no'])
            write_codeforces_data(cfData)
        except:
            pass
            # print("Error in codeforces")
        try:
            ccData=fetch_codechef_data(response.data[i]['codechef_handle'],response.data[i]['enrollment_no'])
            write_codechef_data(ccData)
        except:
            # print("Error in codechef")
            pass
        try:
            lcData=fetch_leetcode_data(response.data[i]['leetcode_handle'],response.data[i]['enrollment_no'])
            write_leetcode_data(lcData)
        except:
            pass
            # print("Error in leetcode")
    return response.data

updateData(response)

