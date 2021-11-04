# Script that starts the project in entirery. It needs to be
# restarted under any of the following conditions:
# - A change in the database schema (types need to be regenerated)
# - Creation of a new lambda or change of directory (optional)
npm run types

(npm run website:start & npm run api:start & npm run api:serve)