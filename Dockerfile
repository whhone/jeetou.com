FROM python:3

RUN apt-get update && apt-get install yarnpkg -y

WORKDIR /usr/src/app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
# RUN yarnpkg --cwd ./client
RUN cd client && yarnpkg && cd ..
RUN scripts/build_webpack.sh

RUN python manage.py collectstatic
CMD [ "gunicorn", "main.wsgi_prod", "-b", "0.0.0.0:8080", "--log-file", "-" ]
