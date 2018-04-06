#!/bin/sh

curl -X POST -H 'Content-Type:application/json' http://localhost:3000/posts \
-d '{"title": "How to feed a cat", "text": "You serve a cat as its servant."}'