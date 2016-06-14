#!/bin/bash

mongoimport --db Hyoshi --collection users --drop --file ./mockData/users.json
mongoimport --db Hyoshi --collection instruments --drop --file ./mockData/instruments.json
mongoimport --db Hyoshi --collection iceBreakerQuestions --drop --file ./mockData/iceBreakerQuestions.json

mongo Hyoshi --eval "db.users.find({\"name\":\"Nicholas\"}).forEach(printjson);"

echo "Mongo DB Hyoshi Bootstrap Complete"