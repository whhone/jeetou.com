# Jeetou on Google Cloud Platform

## Local Testing in Cloud Shell

```sh
# build the docker image
docker build -t jeetou-api .

# run the docker image
# --rm: automatically remove the container when it exits
docker run --rm -p 8080:8080 jeetou-api

# build and run in one command
docker build -t jeetou-api . && docker run --rm -p 8080:8080 jeetou-api
```

Then, navigate to the "Web Preview".

## Cloud Run Deployment

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
