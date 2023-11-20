from flask import request, jsonify
from werkzeug.security import generate_password_hash
import uuid

def register (Users, db):
    data = request.json
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    existing_user = Users.query.filter_by(user_name=username).first()
    existing_email = Users.query.filter_by(user_email=email).first()

    if existing_user or existing_email:
        # User already exists
        return jsonify({"message": "Username already exists"}), 400

    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
    new_user = Users(
        id=str(uuid.uuid4()),
        user_name=username,
        user_email=email,
        user_password=hashed_password
    )
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully"}), 201
