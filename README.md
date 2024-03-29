# [Jeetou 截圖道](https://jeetou.com)

## Development

### Requirements
* python 3.10
* Node.js

### Create the virtual env for django

```bash
$ python3 -m venv venv
$ source venv/bin/activate
```

To learn more about venv, see https://docs.python.org/3/tutorial/venv.html.

### Install Required Packages

```bash
$ pip install -r requirements.txt
$ cd client && yarnpkg
```

### Leaving virtual env
```bash
$ deactivate
```

### Run local server
```bash
$ python manage.py runserver 0.0.0.0:8080
$ cd client && node server.js
```

## Deployment

### Run production server
```bash
$ ./scripts/build_webpack.sh
$ python manage.py collectstatic
$ gunicorn main.wsgi_prod --log-file -
```

### Docker Compose
```bash
$ docker compose up
```
