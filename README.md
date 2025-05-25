# [Jeetou 截圖道](https://jeetou.com)

## Development

### Requirements

* Python 3
* Node.js

### Install Required Packages

```bash
# backend
uv pip install -r requirements.txt

# front
cd frontend && deno install
```

### Run local server
```bash
# backend
uv run manage.py runserver 0.0.0.0:8080

# frontend
cd frontend && deno run dev
```

## Deployment

### Run production server
```bash
# frontend
deno run build

# backend
uv run manage.py collectstatic
gunicorn main.wsgi_prod --log-file -
```

### Docker Compose
```bash
docker compose up
```
