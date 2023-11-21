from flask import request, jsonify

def getUserQueries(queries_string, Users):
    data = request.json
    userData = data.get("user")
    all_query = queries_string.query.all()

    queries_list = []
    for query in all_query:
        user = Users.query.filter_by(id=query.user_id).first().user_name
        new_query_string = query.query_string.replace("`bigquery-public-data.world_bank_intl_education.international_education`", "$Dataset")
        query_data = {
            'user': user,
            'queryName': query.query_name,
            'queryString': new_query_string,
            'queryDescription': query.query_description
        }

        if (user == userData['userName']):
            queries_list.append(query_data)

    return jsonify({"queries": queries_list})
