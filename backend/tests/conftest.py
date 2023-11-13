import pytest
from app import hello

@pytest.fixture()
def app():
    app = hello()
    app.config.update({
        'TESTING': True
    })

    yield app

@pytest.fixture()
def client(app):
    return app.test_client()

@pytest.fixture()
def runner(app):
    return app.test_cli_runner()
