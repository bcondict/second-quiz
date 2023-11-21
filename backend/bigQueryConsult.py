import os
from flask import jsonify, request
from google.cloud import bigquery

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = './service-account-file.json'


def get_data():
    data = request.json
    sql_query = data.get("queryString")

    sql_query = sql_query.replace("`", "\"")
    sql_query = sql_query.replace("$Dataset", "`bigquery-public-data.world_bank_intl_education.international_education`")
    sql_query = sql_query + " LIMIT 20"

    # Itinialize a BigQuery Client
    client = bigquery.Client()

    # Construct a BigQuery SQL query
    query_job = client.query(sql_query)

    # Extract the query result
    result = query_job.result()

    # Fortmat the result as a list of dicts
    formatted_data = []
    for row in result:
        formatted_data.append(dict(row.items()))

    return jsonify(formatted_data)
    # return "hola"
