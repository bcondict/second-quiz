from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy.orm import DeclarativeBase
from flask_cors import CORS
import uuid



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

class Queries(db.Model):
    id = db.Column(db.String(36), primary_key=True)
    user_id = db.Column(db.String(36), nullable=False)
    query_name = db.Column(db.String(100), nullable=False)
    query = db.Column(db.String(1000), nullable=False)
    query_description = db.Column(db.String(1000), nullable=False)


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
    from login import login
    return login(Users)


# @app.route("/register")
@app.route("/register", methods=["POST"])
def register():
    from register import register
    return register(Users, db)


@app.route("/saveQuery", methods=["POST"])
def saveQuery():
    from saveQuery import saveQuery
    return saveQuery(Queries, Users, db)

@app.route("/queries", methods=["GET"])
def queries():
    # from queries import queries
    # return queries(Queries, Users, db)

    # query = Queries.query.all()
    
    # return jsonify("mystring {}" .format(query))
    # return jsonify(query)
    queries = db.session.query(Queries).all()
    print("\n\n\n hollaaa\n\n\n" + queries)
    return jsonify(queries)


if __name__ == "__main__":
    app.run(debug=True)
