Drone ci an automated container based continuous delivery platform
wired it up to github repo

write pipeline steps in docker containers


Uses OAuth as Authentication
when github detects commits or a build or a pull request comes in, github uses a webhook to queue a job on the drone server 
For pipeline, you have to install kubernetes runner, talks to the kubernetes API and it is able to create pods based on the jobs it tries to run 

Basic pipeline

When a commit/build or pull request is made, 
Github sends a request via webhook to the drone server and queues the (job {in the})pipeline and then sends it to the k8s runner

Authentication between drone server and kubernetes runner is done through a shared secret

The k8s runner will call the API server to create a pod/pods
When the job is finished, the k8s runner will kill the pods

You need a public IP or hostname record, then setup OAuth app on github and wire it up to the IP address then deploy drone server and k8s runner
