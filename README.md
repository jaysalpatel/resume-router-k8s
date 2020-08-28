React Application displaying my resume wrapped in an docker image that is deploy on a kubernetes cluster served through Nginx



to run docker image

docker run -p 80:80 react-router


set up kubernetes cluster use virtualbox as your VM for Mac OS X

    minikube start --vm-driver=virtualbox