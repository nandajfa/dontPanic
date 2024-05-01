#!/bin/bash

# set -e
# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
# 	CREATE USER jab;
# 	CREATE DATABASE postgres;
# 	ALTER USER jab WITH ENCRYPTED PASSWORD 'jab';
# 	GRANT ALL PRIVILEGES ON DATABASE postgres TO jab;
# EOSQL

set -e
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE USER jab;
	ALTER USER jab WITH ENCRYPTED PASSWORD 'jab';
	GRANT ALL PRIVILEGES ON DATABASE postgres TO jab;
EOSQL

psql -v ON_ERROR_STOP=1 --username postgres --dbname postgres <<-EOSQL
	CREATE TABLE IF NOT EXISTS equations ( id SERIAL PRIMARY KEY, equation varchar(6));
	INSERT INTO equations (equation) VALUES ('8*9-30'), ('9*9-39'), ('9*8-30'), ('168/04'), ('8*8-22'), ('7*4+14'), ('07*5+7');
EOSQL
