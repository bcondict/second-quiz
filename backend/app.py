from flask import Flask, request, jsonify
from google.cloud import bigquery
import os

app = Flask(__name__)

# Itinialize a BigQuery Client
client = bigquery.Client()
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = './service-account-file.json'

# Construct a BigQuery SQL query
sql_query = """
SELECT
  country_name,
  AVG(value) AS average
FROM
  `bigquery-public-data.world_bank_intl_education.international_education`
WHERE
  indicator_code = "SE.XPD.TOTL.GB.ZS"
  AND year > 2000
GROUP BY
  country_name
ORDER BY
  average DESC
LIMIT 20
"""

query_job = client.query(sql_query)


# Extract the query result
result = query_job.result() # Waits for job to complete.

# Fortmat the result as a list of dicts
formatted_data = []
for row in result:
    formatted_data.append(dict(row.items()))

@app.route("/")
def hello():
    return jsonify(formatted_data)


if __name__ == "__main__":
    app.run(debug=True, use_reloader=True)
