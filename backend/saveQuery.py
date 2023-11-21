from flask import request, jsonify
import uuid

def saveQuery(Queries, Users, db):
    data = request.json
    queryName = data.get("queryName")
    queryDescription = data.get("queryDescription")
    queryString = data.get("queryString")
    userData = data.get("user")

    queryString = queryString.replace("$Dataset", "`bigquery-public-data.world_bank_intl_education.international_education`")

    user = Users.query.filter_by(user_email=userData['userEmail']).first()
    new_query = Queries(
        id=str(uuid.uuid4()),
        user_id=user.id,
        query_name=queryName,
        query_description=queryDescription,
        query_string=queryString
    )

    db.session.add(new_query)
    db.session.commit()
    return jsonify({"message": "Query saved successfully"}), 200
