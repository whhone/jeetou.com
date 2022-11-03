# [Jeetou 截圖道](https://jeetou.com)

## Set up

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
