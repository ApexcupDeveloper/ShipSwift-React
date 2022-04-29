PROJECT_ID := "shipswift-project"
REGISTRY := "eu.gcr.io"
IMAGE_NAME := "web-app"
SERVICE := "web-app"

build-image:
		docker build -f ./dockerfiles/Dockerfile.prod . --platform linux/amd64 -t shipswift/$(IMAGE_NAME) -t $(REGISTRY)/$(PROJECT_ID)/$(IMAGE_NAME)

publish-image: build-image
		docker push $(REGISTRY)/$(PROJECT_ID)/$(IMAGE_NAME)

deploy:
		HTTPS_PROXY=localhost:8888 kubectl get namespace $(SERVICE) > /dev/null || kubectl create namespace $(SERVICE)
		HTTPS_PROXY=localhost:8888 helm upgrade --install -n $(SERVICE) -f deployment/$(SERVICE)/values.yaml $(SERVICE) ./deployment/$(SERVICE)