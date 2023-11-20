from flask import request, jsonify
from werkzeug.security import check_password_hash

def login(Users):
    data = request.json

    username = data.get("username")
    password = data.get("password")

    user = Users.query.filter_by(user_name=username).first()

    if check_password_hash(user.user_password, password):
        userData = {
            'userName': user.user_name,
            'userEmail': user.user_email
        }
        return jsonify(userData), 200

    else:
        # Invalid credentials
        return jsonify({"message": "Invalid Credentials"}), 401
