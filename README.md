# [Jeetou 截圖道](https://jeetou.com)

## Set up

### Requirements
* python 3.6+ (virtualenv is recommended)
* Node.js

### Create the virtual env for django
```bash
$ mkvirtualenv --python=`which python3` django
$ workon django
```

### Install Required Packages
```bash
$ pip install -r requirements.txt
$ cd client && yarn
```

### Leaving virtual env
```bash
$ deactivate
```

### Once the database is setup, run the migrations
```bash
$ python manage.py migrate
```

### Import Jeetou test data to local database:
```bash
$ ./scripts/import_data.sh
```

### Run local server
```bash
$ python manage.py runserver 0.0.0.0:8000
$ cd client && node server.js
```
