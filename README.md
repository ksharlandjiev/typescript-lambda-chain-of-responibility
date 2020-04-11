[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ksharlandjiev_typescript-lambda-chain-of-responibility&metric=alert_status)](https://sonarcloud.io/dashboard?id=ksharlandjiev_typescript-lambda-chain-of-responibility)

# AWS Lambda - Chain-of-responsibility pattern
## Description
Node.js / TypeScript implementation of Chain-of-responsibility pattern with AWS Lambda function.
IMPORTANT: 
Do to the nature of Lambda this can only funciton if all handlers are synchronous.

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
