FROM python:3-alpine

WORKDIR /usr/src/app

# copy and install dep first to speed up docker rebuild
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
RUN python manage.py collectstatic

CMD [ "gunicorn", "main.wsgi_prod", "-b", "0.0.0.0:8080", "--log-file", "-" ]
