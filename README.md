# PFSwChO2021

## lab 4
### commands and why i used them:
```bash
docker run --rm --privileged multiarch/qemu-user-static --reset -p yes
docker buildx create --name testbuilder
docker buildx use testbuilder
docker buildx build -t irusio/lab4:TestNginx --platform linux/arm64,linux/amd64,linux/386,linux/ppc64le --push .
```
czyli po kolei:
- aktywacja qemu
- stworzenie kontenera do buildu testbuilder
- aktywowanie go
- zbudowanie dockerfile pod poszczególne architektury, i wysłanie go do chmury

link do dockerhub'a: https://hub.docker.com/layers/177691301/irusio/lab4/TestNginx/images/sha256-d544023a2b5a5db07f4f09355fbe730755c69aa69a6fd577234e9800b523e450?context=repo