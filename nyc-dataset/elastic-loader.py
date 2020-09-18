import os
import pandas as pd
from elasticsearch import Elasticsearch

es = Elasticsearch([
    {'host': '192.168.22.12', 'port': 9200}
])


for root, directories, files in os.walk(r".\nyc-dataset\datasets\green"):
    for file in files:
        if file.endswith(".parquet"):
            print(file)
            df = pd.read_parquet(os.path.join(root, file))
            for index, data in df.iterrows():
                doc = data.to_json(orient='columns', date_format='iso')
                res = es.index(index="green", body=doc)
