#!/bin/sh

echo "running migrations"
python manage.py makemigrations --noinput || exit 1
python manage.py migrate --noinput || exit 1
python manage.py runscript load || exit 1
exec "$@"