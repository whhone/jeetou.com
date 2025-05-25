# [Jeetou 截圖道](https://jeetou.com)

## Development

### Requirements
* python 3.10
* Node.js

### Create the virtual env for django

```bash
python -m venv venv
source venv/bin/activate
```

To learn more about venv, see https://docs.python.org/3/tutorial/venv.html.

### Install Required Packages

```bash
# backend
uv pip install -r requirements.txt

# front
cd client && deno install
```

### Leaving virtual env
```bash
deactivate
```

### Run local server
```bash
# backend
uv run manage.py runserver 0.0.0.0:8080

# frontend
cd client && deno run dev
```

## Deployment

### Run production server
```bash
# frontend
deno run build

# TODO: probably not required anymore
uv run manage.py collectstatic

gunicorn main.wsgi_prod --log-file -
```

### Docker Compose
```bash
docker compose up
```
