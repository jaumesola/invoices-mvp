#
# Both integration & acceptance tests in the Meteor guide terminology 
# (full app mode)
#
set -x
meteor test --full-app --driver-package practicalmeteor:mocha --port 3020
