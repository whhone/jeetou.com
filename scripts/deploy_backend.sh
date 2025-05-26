#!/usr/bin/env bash

cd "$(dirname "$0")"/../backend

gcloud run deploy jeetou-api --source . --region=us-west1

echo "----Deployed----"
