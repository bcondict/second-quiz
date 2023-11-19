from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import uuid
from werkzeug.security import generate_password_hash, check_password_hash
# from sqlalchemy.orm import DeclarativeBase
from flask_cors import CORS
import hashlib
import os



app = Flask(__name__)
CORS(app)



# Sql Alchemy Config
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root@localhost/ver_tech_fellowship'
db = SQLAlchemy(app)

class Users(db.Model):
    id = db.Column(db.String(36), primary_key=True)
    user_name = db.Column(db.String(50), unique=True, nullable=False)
    user_email = db.Column(db.String(100), unique=True, nullable=False)
    user_password = db.Column(db.String(100), nullable=False)



@app.route("/")
def Home():
    try:
        user = Users.query.all()
        for u in user:
            print(u.user_name)

        return jsonify({"message": "Hello World"})
    except Exception as e:
        return jsonify({"message": str(e)})
    # from bigQueryConsult import get_data
    # result = get_data()
    # return result

@app.route("/login", methods=["POST"])
def login():
    data = request.json

    username = data.get("username")
    password = data.get("password")

    user = Users.query.filter_by(user_name=username).first()

    # hash_object = hashlib.sha256()
    # hash_object.update(password.encode())
    # hashed_password_to_check = hash_object.hexdigest()
    # print(hashed_password_to_check)
    # print(user.user_password)

    # if == user.user_password:
    if check_password_hash(user.user_password, password):
        userData = {
            'userName': user.user_name,
            'userEmail': user.user_email
        }
        return jsonify(userData), 200

    else:
        # Invalid credentials
        return jsonify({"message": "Invalid Credentials"}), 401


# @app.route("/register")
@app.route("/register", methods=["POST"])
def register():
    data = request.json
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    existing_user = Users.query.filter_by(user_name=username).first()
    existing_email = Users.query.filter_by(user_email=email).first()

    if existing_user or existing_email:
        # User already exists
        return jsonify({"message": "Username already exists"}), 400

    # salt = os.getrandom(32)
    # hash_object = hashlib.sha256()
    # hash_object.update(salt + password.encode())
    # password = hash_object.hexdigest()
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


if __name__ == "__main__":
    app.run(debug=True, use_reloader=True)
