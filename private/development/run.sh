set -x

case $1 in 
'functional')  # Functional (acceptance) tests with Chimp (files: *.func-tests.*)
	#
	# default port 3000
	#
	# you should have meteor running either normally
	# or like this (differences to be detailed): 
	# meteor test --full-app --driver-package tmeasday:acceptance-test-driver 
	#
	meteor npm run chimp-watch;;
	
'integration') # Integration tests (full app mode) (files: *.app-tests.*)

	port=`expr $CBY_PORT + 20`
	meteor test --port $port --settings $CBY_SETTINGS --full-app --driver-package practicalmeteor:mocha;;
	
# Another potential mode:
# meteor test --full-app --driver-package tmeasday:acceptance-test-driver
# see https://guide.meteor.com/testing.html#creating-acceptance-test-data
	
'unit') # unit Tests (files: *.tests.*)
	port=`expr $CBY_PORT + 10`
	meteor test --port $port --settings $CBY_SETTINGS --driver-package practicalmeteor:mocha;;
	
*) meteor --port $CBY_PORT --settings $CBY_SETTINGS;; # default run meteor in "normal" mode
esac