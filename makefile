CLANG_FORMAT=client/node_modules/clang-format/bin/linux_x64/clang-format --style=Google
CSS_VALIDATOR=client/node_modules/css-validator/bin/css-validator
ESLINT=client/node_modules/eslint/bin/eslint.js
PRETTIER=client/node_modules/prettier/bin-prettier.js

pretty:
	find client/src -name *.css | xargs $(PRETTIER) --write
	find src -iname *.java | xargs $(CLANG_FORMAT) -i
	find client/src -name *.js | xargs $(ESLINT) --fix

validate:
	find client/src -name *.css | xargs $(CSS_VALIDATOR)
	find client/src -name *.js | xargs $(ESLINT)

package:
	mvn package