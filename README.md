#Open Web Documents
This is a collaborative document editor. For the manifesto, see src/index.html

##Installing depenencies
Really, the only dependancy is a wave server. These instuctions will install wave-node.
Install redis. On ArchLinux:
	# pacman -S redis
Get node.js
	$ git clone --depth 1 git://github.com/joyent/node.git
	$ cd node
	$ ./configure
	$ make
	# make install
Get npm, the node pacman
	$ curl http://npmjs.org/install.sh | sh
Install wave-node
	$ npm install wave-node

##Running the examples
see example.sh . Open up src/index.html in your web browser.
	$ ./example.sh
	$ chromium-browser src/index.html

