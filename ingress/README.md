NGINX ingress set up 

minikube start


helm search nginx ingress


##deploy helm charts
helm install stable/nginx-ingress --name nginx-resume --set  rbac.create=true

kubectl get all

kubectl get pods

deploy nginx deploy main

kubectl create -f ./nginx-yamls/nginx-deploy-main.yaml

kubectl create -f ./nginx-yamls/nginx-resource-main.yaml

kubectl expose deploy nginx-deploy-main --port 80

kubectl get svc

kubectl create -f ./nginx-yamls/nginx-resource-main.yaml

kubectl describe ing ingress-resource-main

    ingress controller should redirect us to the service we exposed earlier for path-based routing
    - update /etc/hosts 
kubectl get svc
    - get EXTERNAL IP of nginx-ingress-default-backend 
    sudo nano /etc/hosts
    EXTERNAL IP jaysalpatel.org

