#!/bin/bash

declare -a users=('Nicholas' 'Aaron' 'Ant')
declare -a instruments=('electric guitar' 'organ' 'acoustic guitar')
DB=Hyoshi

# --- mock data imports ---
# WARNING:  drops all old data and loads fresh data from objects in /mockData

# user import
mongoimport --db Hyoshi --collection users --drop --file ./mockData/users.json
# instrument import
mongoimport --db Hyoshi --collection instruments --drop --file ./mockData/instruments.json

# assign each user an instrument
TOTAL=${#users[@]}
for ((i=0; i<$TOTAL; i++))
do
    ID=$(mongo $DB --quiet --eval "db.users.find({\"name\": \"${users[$i]}\"}, { _id: 1}).forEach(printjson)");
    INSTRUMENT=$(mongo $DB --quiet --eval "db.instruments.find({\"subCategory\": \"${instruments[$i]}\"}, { _id: 1}).forEach(printjson)");
    echo $ID
    echo $INSTRUMENT
    mongo $DB --quiet --eval "db.users.update($ID , {\$addToSet: {\"instruments\": $INSTRUMENT }})"
done

echo "Mongo DB $DB Bootstrap Complete"