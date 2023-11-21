from flask import jsonify

def getQueries(queries_string, Users ):
    all_query = queries_string.query.all()

    queries_list = []
    for query in all_query:
        new_query_string = query.query_string.replace("`bigquery-public-data.world_bank_intl_education.international_education`", "$Dataset")
        user = Users.query.filter_by(id=query.user_id).first().user_name
        query_data = {
            'user': user,
            'queryName': query.query_name,
            'queryString': new_query_string,
            'queryDescription': query.query_description
        }
        queries_list.append(query_data)

    return jsonify({"queries": queries_list})
