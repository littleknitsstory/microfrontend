# Local build and deploy

1) Set container registry where images will be pushed by `CONTAINER_REGISTRY_ADDRESS` variable (default is `localhost`)

    ```bash
    export CONTAINER_REGISTRY_ADDRESS="container-registry-address:port"
    ```

2) Build all containers. Script will generate docker-compose.yml from [template](docker-compose.yml.template)

    ```bash
    # Script required installed docker/podman, jq, and envsubst
    ./build.sh
    ```

3) Run containers by command:

    ```bash
    docker-compose -p lks-frontend up
    ```

4) Open http://localhost:3001 in browser

# (Bonus for brave) Run containers in podman.

1) Install `podman` `podman-docker` and `docker-compose` packages

2) Enable podman socket

    ```bash
    systemctl start --user podman.socket
    ```

3) Set path to socket

    ```bash
    export DOCKER_HOST="unix://$XDG_RUNTIME_DIR/podman/podman.sock"
    ```

4) Run containers

    ```bash
    docker-compose -p lks-frontend up
    ```
