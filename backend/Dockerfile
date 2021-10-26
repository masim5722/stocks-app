FROM python:latest
ENV PYTHONUNBUFFERED 1

WORKDIR /backend
COPY requirements.txt requirements.txt
EXPOSE 8000
RUN pip install -r requirements.txt
COPY . .

COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
# start composer and Apache2 on image start
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["migrations"]
