NAME=plex-desktop

SRCS_BUILD=main.js \
	Plex \
	src \
	package.json

run:
	nodewebkit ${name}.nw

build:
	zip -r ${NAME}.nw ${SRCS_BUILD}

clean:

fclean: clean
	rm ${NAME}.nw

re: fclean build run
