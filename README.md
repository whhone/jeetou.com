# [Jeetou 截圖道](https://jeetou.com)

## Development

### Requirements
* python 3.10
* Node.js

### Create the virtual env for django

```bash
$ python3 -m venv env
$ source env/bin/activate
```

To learn more about venv, see https://docs.python.org/3/tutorial/venv.html.

### Install Required Packages
```bash
$ pip install -r requirements.txt
$ cd client && yarn
```

### Leaving virtual env
```bash
$ deactivate
```

### Run local server
```bash
$ python manage.py runserver 0.0.0.0:8000
$ cd client && node server.js
```

## Deployment

### Run production server
```bash
$ python manage.py collectstatic
$ gunicorn main.wsgi_prod --log-file -
```
### Docker
```bash
# Build the image
docker build -t jeetou

# Run the image
docker run -it --rm -p 0.0.0.0:8000:8000/tcp --name my-running-app jeetou
```
