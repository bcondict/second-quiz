from flask import Flask, request, jsonify

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase



app = Flask(__name__)

# Sql Alchemy Config
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:root@localhost/ver_tech_fellowship'

# db = SQLAlchemy(app)


@app.route("/")
def Home():
    from bigQueryConsult import get_data
    result = get_data()
    return result


# def 

if __name__ == "__main__":
    app.run(debug=True, use_reloader=True)
