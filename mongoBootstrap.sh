#!/bin/bash

mongoimport --db Hyoshi --collection users --drop --file ./mockData/users.json

echo "Mongo DB Hyoshi Bootstrap Complete"