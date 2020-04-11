# sam-typescript-template

## Project setup
```
cd app
npm i
```

### Local compile from the root folder
```
sh ./build.sh dev
```

### SAM Build
```
sam build -t template-dev.yaml
```

### Invoke function locally (Docker required)
```
sam local invoke "ChainORrespFunction" -e events/event.json -t template-dev.yaml
```

### Start API (Docker required)
```
sam local start-api -t template-dev.yaml
```

### Build and Invoke
```
sh build.sh dev && sam local invoke "ChainORrespFunction" -e events/event.json -t template-dev.yaml
```