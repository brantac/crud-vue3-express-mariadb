FROM mariadb:10.7-focal

# Set the working diretory
WORKDIR /app

# Copy the data into the directory
COPY ./scripts/address.txt /app/address.txt
COPY ./scripts/user.txt /app/user.txt

ENV MARIADB_ROOT_PASSWORD=secret
ENV MARIADB_USER=guest
ENV MARIADB_PASSWORD=guest
ENV MARIADB_DATABASE=app

# Mount the initial scripts that will create our tables and
# insert our data into them
COPY ./scripts/init.sql /docker-entrypoint-initdb.d