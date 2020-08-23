# List indices
GET /_cat/indices

# Show mapping
GET /kibana_sample_data_flights/

# List all documents in index
GET /kibana_sample_data_flights/_search
{
    "query": {
        "match_all": {}
    }
}

# Search index
GET /kibana_sample_data_flights/_search
{
    "query": {
        "match": {
            "Carrier": "JetBeats"
        }
    }
}

# Search with pagination
# By default search size is 10,000 (index.max_result_window)
GET /kibana_sample_data_flights/_search
{
    "from": 0,
    "size": 100,
    "query": {
        "match": {
            "Carrier": "JetBeats"
        }
    }
}