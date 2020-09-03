React Application displaying my resume wrapped in an docker image that is deploy on a kubernetes cluster served through Nginx



to run docker image

docker run -p 80:80 react-router


set up kubernetes cluster use virtualbox as your VM for Mac OS X

    minikube start --vm-driver=virtualbox

Steps to install Argocd


Create Argocd namespace
    kubectl create ns argocd
    kubectl -n argocd get pods


    kubectl -n argocd apply -f install.yaml

    kubectl -n argocd get pods

    use output to port forward 

    kubectl port-forward svc/argocd-server -n argocd 8000:443

    login with command from output for password and username is admin

    kubectl get pods -n argocd -l app.kubernetes.io/name=argocd-server -o name | cut -d'/' -f 2

Once logged in on Argocd on localhost:8000

    kubectl -n argocd apply -f app.yaml


Jenkins
    sudo usermod -aG docker jenkins
    sudo systemctl restart jenkins
    sudo su - jenkins
    docker ps

Problems with github webhooks on Jenkins

There was an error setting up your hook: Sorry, the URL host localhost is not supported because it isn't reachable over the public Internet

Solution:

You need a public address for Github to point to when detected a push request. localhost is on your localmachine.

The way i solved it is to use a proxy agent Ngrok. Enter command >ngrok http 8080, it will generate http://{hexa-numbers}.ngrok.io copy the generated public address and put in your github repository webhook http://{hexa-numbers}.ngrok.io/github-webhook/.

At this point when you save it, it will send a post request to ngrok server, got redirected to localhost and you will see a green tick.



    

