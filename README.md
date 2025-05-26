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

## Google Cloud Run

### Local Testing

```sh
# build the docker image
docker build -t jeetou-api .

# run the docker image
# --rm: automatically remove the container when it exits
docker run --rm -p 8080:8080 jeetou-api

# build and run in one command
docker build -t jeetou-api . && docker run --rm -p 8080:8080 jeetou-api
```

The Cloud Run service is deployed when pushing new code.

### Manual Cloud Run Deployment

```sh
# This will upload the source to Google cloud and build there.
gcloud run deploy jeetou-api --source . --region=us-west1
```

### Manual Deployment with cloudbuild.yaml

```sh
gcloud builds submit --config cloudbuild.yaml --region=us-west1
```
