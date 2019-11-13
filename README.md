# 파일
* main.ts
    * 진입점이 되는 스크립트
* app.module.ts
    * 모듈들을 포함하는 root 모듈 스크립트
* app.controller.ts
    * 라우팅을 담당하는 컨트롤러

## 하위 핸들러 만드는 방법
* nest g controller cats
* nest g service cats
* nest g module cats
* ex) nest g service cats/wildcats는 서브디렉토리로 wildcats를 생성하고 거기에 서비스 스크립트를 생성함

## Installation

* npm install -g @nestjs/cli
* nest new project-name
* npm install

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

