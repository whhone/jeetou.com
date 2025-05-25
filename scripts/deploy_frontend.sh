#!/usr/bin/env bash


cd "$(dirname "$0")"/../frontend

OUTPUT_DIR="assets/dist"
PUBLIC_DIR_REMOTE="whhone.com:/srv/http/jeetou.com"

deno run build

rsync -aqz --delete ${OUTPUT_DIR}/ ${PUBLIC_DIR_REMOTE}

echo "----Deployed----"
