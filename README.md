# How to run it

run npm run dev if you want to run TS, but to build the docker image, just run skaffold instead of doing kubectl apply and all that to each dpl.

- skaffold dev

# How to debug

To check which pods are running:

- kubectl get pods

# Notas:

0. Qualquer throw new ALGUMERRORCUSTOM é pego pelo nosso error-handler e interpretado apropriadamente.
1. Use os modelos do ITH back e outros pra fazer uma comparação entre o BadRequestError e outros.
2.
