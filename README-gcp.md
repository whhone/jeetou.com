# Jeetou on Google Cloud Platform

## Local Testing in Cloud Shell

```sh
# build the docker image
docker build -t testing .

# run the docker image
# --rm: automatically remove the container when it exits
docker run --rm -p 8080:8080 testing

# build and run in one command
docker build -t testing . && docker run --rm -p 8080:8080 testing
```

Then, navigate to the "Web Preview".

## Cloud Run Deployment

The Cloud Run service is deployed when pushing new code.

### Manual Deployment with cloudbuild.yaml

```sh
gcloud builds submit --config cloudbuild.yaml --region=us-west1
```