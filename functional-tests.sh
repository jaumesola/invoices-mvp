#
# Acceptance tests with Chimp
#
# default port 3000
#
# you should have meteor running either normally
# or like this (differences to be detailed): 
# meteor test --full-app --driver-package tmeasday:acceptance-test-driver 
#
set -x
meteor npm run chimp-watch