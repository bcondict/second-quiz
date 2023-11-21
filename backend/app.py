from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS



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

class queries_string(db.Model):
    id = db.Column(db.String(36), primary_key=True)
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    query_name = db.Column(db.String(100), nullable=False)
    query_string = db.Column(db.String(1000), nullable=False)
    query_description = db.Column(db.String(1000), nullable=False)


@app.route("/")
def Home():
    try:
        user = Users.query.all()
        # for u in user:
            # print(u.user_name)

        return jsonify({"message": user[0].user_name})
    except Exception as e:
        return jsonify({"message": str(e)})
    # from bigQueryConsult import get_data
    # result = get_data()
    # return result

@app.route("/login", methods=["POST"])
def login():
    from login import login
    return login(Users)

@app.route("/register", methods=["POST"])
def register():
    from register import register
    return register(Users, db)

@app.route("/saveQuery", methods=["POST"])
def saveQuery():
    from saveQuery import saveQuery
    return saveQuery(queries_string, Users, db)

@app.route("/queries", methods=["GET"])
def getQueries():
    from getQueries import getQueries
    return getQueries(queries_string, Users)

@app.route("/queries", methods=["POST"])
def getUserQueries():
    from getUserQueries import getUserQueries
    return getUserQueries(queries_string, Users)

@app.route("/bigQuery", methods=["POST"])
def bigQuery():
    from bigQueryConsult import get_data
    return get_data()

if __name__ == "__main__":
    app.run(debug=True)
