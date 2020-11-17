# How to run it

run npm run dev if you want to run TS, but to build the docker image, just run skaffold instead of doing kubectl apply and all that to each dpl.

- skaffold dev

# How to debug

To check which pods are running:

- kubectl get pods

# Notas:

0. Qualquer throw new ALGUMERRORCUSTOM é pego pelo nosso error-handler e interpretado apropriadamente.
1. Use os modelos do ITH back e outros pra fazer uma comparação entre o BadRequestError e outros.
2. Check & reamke Dockerfiles vs Docker-compose, talvez refatorar usando outra coisa fora dpl e yaml, entenda as diferenças entre esses melhor.
3. O principal propósito da rota "current-user" é abstrair o máximo possível de lógica do front, já que o JWT tá dentro do cookie, a gente faz toda a lógica por trás dos panos, assim não administramos nada de relevante no front, aí se tiver tudo ok, enviamos as informações "sensíveis", junto com a confirmação. https://prnt.sc/vkp57g
