#!/usr/bin/env bash

set -euo pipefail

if [[ -z "${CONTAINER_REGISTRY_ADDRESS-}" ]]; then
    CONTAINER_REGISTRY_ADDRESS="localhost"
fi

if [[ ! -e $(command -v jq) ]]; then
    echo "jq is required."
    exit 1
fi

if [[ ! -e $(command -v envsubst) ]]; then
    echo "envsubst is required."
    exit 1
fi

if [[ -e $(command -v docker) ]]; then
    BUILD_COMMAND="docker"
elif [[ -e $(command -v podman) ]]; then
    BUILD_COMMAND="podman"
else
    echo "docker or podman is required."
    exit 1
fi

echo "${BUILD_COMMAND} will be used to build containers."

for app in ./packages/*; do
    APP_VERSION=$(jq -r .version < "${app}/package.json")
    APP_NAME="${app##*/}"
    CONTAINER_IMAGE_TAG="${CONTAINER_REGISTRY_ADDRESS}/lks-frontend-${APP_NAME}:${APP_VERSION}"
    "${BUILD_COMMAND}" build -t "${CONTAINER_IMAGE_TAG}" -f "${app}/Dockerfile"
    if [[ "${CONTAINER_REGISTRY_ADDRESS}" != "localhost" ]]; then
        "${BUILD_COMMAND}" push "${CONTAINER_IMAGE_TAG}"
    fi
    export "APP${APP_NAME: -1}_IMAGE_TAG=${CONTAINER_IMAGE_TAG}"
done

envsubst > docker-compose.yml < docker-compose.yml.template
