// List indices
GET /_cat/indices

// Show mapping
GET /kibana_sample_data_flights/

// List all documents in index
GET /kibana_sample_data_flights/_search
{
    "query": {
        "match_all": {}
    }
}

// Search index
GET /kibana_sample_data_flights/_search
{
    "query": {
        "match": {
            "Carrier": "JetBeats"
        }
    }
}

// Search with pagination
// By default search size is 10,000 (index.max_result_window)
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

// Search using scroll (parameter to indicate context lifetime)
POST /kibana_sample_data_flights/_search?scroll=1m
{
    "size": 1000,
    "query": {
        "match": {
            "Carrier": "JetBeats"
        }
    }
}

// Retrieve next batch from scroll context (scroll_id returned from initial call)
POST /_search/scroll
{
    "scroll" : "1m", 
    "scroll_id" : "FGluY2x1ZGVfY29udGV4dF91dWlkDXF1ZXJ5QW5kRmV0Y2gBFHlKNVVISFFCdkRjMm1tdENpZXQ3AAAAAAAAA6YWUkxIaFNSTGxRaEtSSHh3Qk04LVJ3Zw=="
}

// Clear scroll content
DELETE /_search/scroll
{
    "scroll_id" : "FGluY2x1ZGVfY29udGV4dF91dWlkDXF1ZXJ5QW5kRmV0Y2gBFHlKNVVISFFCdkRjMm1tdENpZXQ3AAAAAAAAA6YWUkxIaFNSTGxRaEtSSHh3Qk04LVJ3Zw=="
}

// View active contexts
GET /_nodes/stats/indices/search

GET /blog/_stats

GET /blog/_search
{
    "query": {
        "match_all": {}
    }
}

PUT /blog/user/dilbert
{
    "name": "Dilbert Brown"
}

PUT /blog/post/1
{
    "user": "dilbert",
    "postDate": "2011-12-15",
    "body": "Search is hard. Search should be easy.",
    "title": "On search"
}

PUT /blog/post/2
{
    "user": "dilbert",
    "postDate": "2011-12-12",
    "body": "Distribution is hard. Distribution should be easy.",
    "title": "On distributed search"
}

PUT /blog/post/3
{
    "user": "dilbert",
    "postDate": "2011-12-10",
    "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat",
    "title": "Lorem ipsum"
}

PUT /blog/
{
    "user": "dilbert",
    "postDate": "2011-12-13",
    "body": "So on and so forth, more to come",
    "title": "Yada yada"
}

POST /person/_bulk
{ "index":{} }
{ "name":"john doe","age":25 }
{ "index":{} }
{ "name":"mary smith","age":32 }

