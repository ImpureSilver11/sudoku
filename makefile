server:
	python -m SimpleHTTPServer 3000
update:
	tsc
	./node_modules/.bin/webpack
usage:
	[server update]

