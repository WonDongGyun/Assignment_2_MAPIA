# 🔥 Assignment_MAPIA(with NestJS)

이 Read.me에는 제가 무엇을 했는지만 적혀있습니다. 팀 전체가 무엇을 했는지 궁금하시다면 하단의 링크를 참조해주세요.    
[Assignment_2_MAPIA 팀 Repository](https://github.com/preOnboarding-Team13/Assignment_2_MAPIA)

<br/>

<br/>

## 🍭 TIL 블로그 주소

- 원동균 : [티스토리 블로그](https://tristy.tistory.com/44)

<br/>

## 🌎 배포

주소 : http://52.14.26.207:3000

<br/>



## 🛠 프로젝트 빌드 및 서버 실행 방법

1. 상단의 Code 버튼을 눌러 경로를 복사한 후 클론 받습니다.

```
$ git clone https://github.com/preOnboarding-Team13/Assignment_1_MAPIA.git
```

2. 패키지를 설치합니다.

```
$ npm install
```

3. 서버를 실행해 줍니다.

```
$ npm start
```

4. 정해진 API에 접근하여 서비스를 이용합니다.

<br/>


## 📝 과제 요구사항

### [필수 포함 사항]

-   READ.ME 작성
    -   프로젝트 빌드, 자세한 실행 방법 명시
    -   구현 방법과 이유에 대한 간략한 설명
    -   완료된 시스템이 배포된 서버의 주소
    -   Swagger나 Postman을 통한 API 테스트할때 필요한 상세 방법
    -   해당 과제를 진행하면서 회고 내용 블로그 포스팅
-   Swagger나 Postman을 이용하여 API 테스트 가능하도록 구현

<br/>

### [과제 안내]

음악 스트리밍 서비스에는 3가지 요소 `뮤지션` `곡` `앨범` 이 존재합니다.

앨범 페이지, 뮤지션 페이지, 곡 페이지에 인접 정보들 (ex, 곡의 뮤지션, 곡의 앨범) 을 표현할 수 있도록 **CRUD** API를 구성해주세요.

이 페이지들에 대한 DB를 구성할 때 `곡` - `뮤지션` 연결과 `곡` - `앨범` 연결은 내부 운영팀에서 직접 연결 가능하지만, `뮤지션` - `앨범` 정보까지 태깅하기엔 내부 운영 리소스가 부족한 상황으로 가정해보겠습니다.

이 때, `뮤지션` - `곡` 이 연결되어있고 `곡` - `앨범` 이 연결되어있다면 `뮤지션` - `[곡*]` - `앨범` 연결되어있다고 판단할 수 있는데요. 이 특성을 이용해서 `뮤지션` 의 `앨범` 을 보여주는 Read API, 특정 `앨범` 의 뮤지션 목록을 보여주는 Read API를 만들어주세요.

-   **Neo4j DB 테이블 요구사항**
    -   `뮤지션`, `곡`, `앨범`은 각각의 테이블 (musician, song, album)로 구성되어야합니다.
    -   `앨범` 안에는 여러 `곡`이 속해있을 수 있습니다.
    -   한 `곡`에는 여러 `뮤지션`이 참여할 수 있습니다.
    -   한 `곡`은 `앨범` 1개에만 들어가있습니다.
    -   `뮤지션`은 여러 앨범을 갖고 있을 수 있습니다.
    -   `뮤지션`, `앨범`, `곡` 데이터는 위 relation을 테스트할 수 있을만큼 임의로 생성해주시면 좋습니다.

<br/>

## 🏫 사용 기술

-   Backend : <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=NestJS&logoColor=white"/></a> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/></a> <img src="https://img.shields.io/badge/GraphQL-E10098?style=flat&logo=GraphQL&logoColor=white"/></a>
-   DataBase : <img src="https://img.shields.io/badge/Neo4j-008CC1?style=flat&logo=Neo4j&logoColor=white"/></a>
-   Collaboration : <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/></a> <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=Postman&logoColor=white"/></a>
-   Deploy: <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=flat&logo=Amazon AWS&logoColor=white"/>

<br/>

## 📂 폴더 구조

5개의 domain을 생성했습니다.

- album
- musician
- song
- relation 
- read

각 domain은 아래와 같이 구성되어 있습니다.

- module
- controller
- service
- repository
- exception folder (for Custom Exception)

read 폴더: GraphQL 관련 폴더

neo4j 폴더: neo4j 설정 및 연결 관련 폴더

```
.
├── src
│  ├── domain
│  │  ├── album
│  │  │  ├── dto
│  │  │  │  └── create.dto.ts
│  │  │  ├── album.controller.spec.ts
│  │  │  ├── album.controller.ts
│  │  │  ├── album.module.ts
│  │  │  ├── album.repository.ts
│  │  │  ├── album.serivce.spec.ts
│  │  │  └── album.service.ts
│  │  ├── musician
│  │  │  └── ...
│  │  ├── relation
│  │  │  └── ...
│  │  ├── song
│  │  │  └── ...

│  │  ├── read
│  │  │  ├── entity
│  │  │  │  ├── album.entity.ts
│  │  │  │  ├── musician.entity.ts
│  │  │  │  └── song.entity.ts
│  │  │  ├── graphql
│  │  │  │  ├── album.graphql
│  │  │  │  ├── graphql.schema.ts
│  │  │  │  ├── musician.graphql
│  │  │  │  └── song.graphql
│  │  │  ├── loader
│  │  │  │  └── haveSongDataLoader.loader.ts
│  │  │  ├── resolver
│  │  │  │  ├── albumRead.resolver.ts
│  │  │  │  ├── albumRead.resolver.spec.ts
│  │  │  │  ├── musicianRead.resolver.ts
│  │  │  │  ├── musicianRead.resolver.spec.ts
│  │  │  │  ├── songRead.resolver.ts
│  │  │  │  └── songRead.resolver.spec.ts
│  │  │  ├── read.module.ts
│  │  │  ├── read.service.spec.ts
│  │  │  ├── read.service.ts
│  ├── global
│  │  └── common
│  │  │  ├── commonResponse.ts
│  │  │  ├── errorCode.ts
│  │  │  ├── errorResponse.ts
│  │  │  ├── successCode.ts
│  │  │  └── successResponse.ts
│  │  └── exception
│  │  │  └── errorHandler.ts
│  ├── neo4j
│  │  ├── neo4j.constants.ts
│  │  ├── neo4j.module.ts
│  │  ├── neo4j.service.spec.ts
│  │  ├── neo4j.service.ts
│  │  └── neo4j.util.ts
│  ├── app.module.ts
│  ├── main.ts
│  └── neo4j-config.interface.ts
├── test
│  ├── app.e2e-spec.ts
│  └── jest-e2e.json
├── nest-cli.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.build.json
└── README.md
```



<br/>

## 🧬 DB 모델링

![GraphDB](https://user-images.githubusercontent.com/60311404/140509284-2a97df44-2504-4100-91ae-515df047e9b0.png)

![image](https://user-images.githubusercontent.com/41619081/140576824-c7c5edce-ccb5-41fa-bb53-50bf1caa9657.png)


<br/>

## 🔗 구현 기능

### Check List


- **화면별 Read API 요구사항 (GraphQL)**
  

 `곡` 페이지

  ✅ 해당 `곡`이 속한 `앨범`을 가져오는 API
    
  ✅ 해당 `곡`을 쓴 `뮤지션` 목록을 가져오는 API

 `앨범` 페이지

  ✅ 해당 `앨범`을 쓴 `뮤지션` 목록 가져오는 API

  ✅ 해당 `앨범`의 `곡` 목록을 가져오는 API

 `뮤지션` 페이지

  ✅ 해당 `뮤지션`의 모든 `앨범` API

  ✅ 해당 `뮤지션`의 `곡` 목록 가져오는 API

- **Create, Update, Delete API 요구사항 (RESTful API)**

  ✅ `곡` 생성 API

  ✅ `앨범` 생성 API

  ✅ `뮤지션` 생성 API

  ✅ `뮤지션` - `곡` 연결

  ✅ `뮤지션` - `곡` 연결해제 API

  ✅ `곡` - `앨범` 연결

  ✅ `곡` - `앨범`연결해제 API

  ✅ `뮤지션` - `앨범` 연결/연결해제 API 는 필요하지 않습니다. (구현 X)

  - `뮤지션` - `곡` 연결과 `곡` - `앨범` 연결이 되어있으면
    GraphDB (neo4j) 에서 `뮤지션` - [*] - `앨범` 연결 여부를 뽑을 수 있습니다. **이 특성을 Read API에서 활용**해주세요.


- **Test**

  ✅ E2E Test
  
  ✅ Unit Test - GraphQL
  
  🔺 Unit Test - Domain

<br/>

🧪 내가 이번 프로젝트에서 무엇을 했지?
-----------------  

<!-- #### Neo4j aruaDB 이용

개발시에 팀원들이 모두 같은 DB를 이용하고, 배포시에도 편리하도록 local DBMS가 아닌 클라우드 형태의 Neo4j aruaDB 를 이용했습니다. 

![Neo4j_ARUA](https://user-images.githubusercontent.com/43634786/140530811-9877e852-771d-49e0-a672-1f69ec28ba4e.png)

#### 각 Node에 Id 속성 추가

이름이 같은 뮤지션, 이름이 같은 앨범 등이 존재할 것 같아 

Node 생성시에 apoc.create.uuid() 로 id값을 생성해서 넣어주었습니다.

그래서 Node를 id로 식별하도록 했습니다. -->

**1) `GraphQL` 환경설정**

이번 프로젝트는 다른 프로젝트와는 다르게 Read 부분만을 GraphQL을 사용한 Rest API + GraphQL API 를 만드는 과제였습니다. 저는 팀에서 유일하게 GraphQL을 다뤄본 경험이 있어서 GraphQL 환경 설정을 맡게 되었습니다. GraphQL을 설정하는 방식에는 2가지 방식이 있는데, 하나는 `code first 방식`, 다른 하나는 `schema first 방식` 입니다. 저는 graphql의 `autoSchemaFile: true` 옵션을 사용하여 자동으로 graphql schema file을 만드는 `code first 방식`이 아닌, 사용자가 직접 작성하는 `schema first 방식`을 사용하였습니다. 

<br/>

`schema first 방식`은 사용자가 직접 graphql schema file을 작성해야 해서 반드시 SDL(Schema Definition Language)과 Resolver가 정확히 일치해야 하고, 코드가 실행되어야 오류를 알 수 있다는 단점이 있습니다. 하지만 graphql schema를 먼저 정의하고 해당 정의에 맞게 코드를 작성하는 방식이라 코드가 전부 작성된 이후 graphql schema file이 정의되는 `code first 방식`에 비해 기술에 익숙하지 않은 사람이 이해하기 쉬우며 schema model을 만들면서 팀원간 의사소통의 수단으로 삼을 수 있다는 장점이 있습니다.      

<br/>

graphql 기술을 다뤄본 사람과 다뤄보지 못한 사람이 섞여서 한 팀을 이룬 경우 최고의 방법이라고 생각하여 `schema firt 방식`을 사용하였습니다.    

<br/>

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/140557963-fa46aa62-b1b0-4739-bedd-ecd156e7aef1.png"></p>

<br/>
<br/>

**2) `GraphQL API` 를 만들고, Unit Test 진행**

graphQL의 Resolver는 Query, Mutation 등의 타입이 어떤 작업을 할 것인지 정의하는 부분입니다. 저는 Resolver를 album, musician, song에따라 다른 Resolver를 만들어서 각각의 Read GraphQL API를 만들었습니다. 이때 각각의 Reolver에서 read service에 있는 서비스를 사용하게 끔 구현했는데 이제와서 보니 해당 서비스 들도 Resolver를 나눈것처럼 나눴어야 했을 것 같습니다. 하나의 Service에다가 몰아 넣으니 눈에 잘 안들어오네요. 

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/144422226-430f8a7d-d6f0-47ad-a415-e285b64b0784.png"></p>

<br/>

각 Resolver와 서비스는 Jest를 사용해서 Unit Test를 진행하였습니다. 테스트 코드 작성은 Given-When-Then 패턴을 따라 작성하였습니다. Given-When-Then 패턴은 Test Code 스타일을 표현하는 방식으로 Given에는 테스트의 상태를 설정하고 When에는 테스트를 진행할 행동, Then에는 테스트의 결과를 예측합니다. 이렇게 작성하면 가독성을 챙길 수 있어서 다른 팀원이 볼 때 어떤 테스트를 진행했는지 쉽게 알 수 있습니다.

<br/>

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/144422987-6ce32ef4-fd35-423d-ad73-d688e3f1247d.png"></p>

<br/>

***3) Data loader 적용해보기***

graphql도 Rest API처럼 N + 1 문제를 가지고 있습니다. Musician과 연관된 Song을 가져오기 위해 다음과 같은 ResolverField를 사용해보겠습니다.  


``` javascript
@ResolveField(() => [Song])
song(@Parent() musician: Musician) {
    return this.readService.readHaveSong(musician);
}
```
<br/>
<br/>

해당 ResolverField에서 다음과 같이 readHaveSong()을 사용하고 있는데, 만약 10개의 musician과 관련된 Song을 찾는다고 하면 11번의 쿼리가 수행됩니다.  

<br/>

``` javascript
async readHaveSong(musician) {
    const haveSong = await this.neo4jService
        .read(
            `MATCH (m:MUSICIAN)-[HAVE]->(s:SONG) WHERE m.id = '${musician["id"]}'  RETURN s`
        )
        .then((res) =>
            res.records.map((row) => new Song(row.get("s")).toJson())
        );

    return haveSong;
}
```

<br/>

graphql 에서는 이러한 N + 1문제를 해결하기 위해 data-loader를 지원합니다. 다음과 같이 여러개의 musician id값을 모아서 IN query를 발생시킴으로서 기존의 11번 발생하는 쿼리를 1번의 쿼리만을 사용해 문제를 해결할 수 있습니다.   

<br/>

```javascript
@ResolveField(() => [Song])
song(
    @Parent() musician: Musician,
    @Loader(HaveSongDataLoader.name)
    locationGroupDataLoader: DataLoader<any, any>
) {
    console.log("hello");
    console.log(musician);
    return locationGroupDataLoader.load(musician);
}
```

```javascript
@Injectable()
export class HaveSongDataLoader {
	constructor(private readonly neo4jService: Neo4jService) {}
	generateDataLoader() {
		return new DataLoader<any, any>(async (musician_id) => {
			console.log(musician_id);
			const loader = await this.neo4jService
				.read(
					`MATCH (m:MUSICIAN)-[HAVE]->(s:SONG) WHERE m.id = [${musician_id}]  RETURN s`
				)
				.then((res) =>
					res.records.map((row) => new Song(row.get("s")).toJson())
				);
			loader.map((element) => console.log(element));
			return null;
		});
	}
}
```
<br/>
<br/>

다만 아쉽게도 현재 `Nest Js v8`과 `nestjs-dataloader: 7.0.1` 가 제대로 호환되지 않아 Rxjs가 충돌하며 발생하는 버그가 있습니다. 이러한 버그가 있어서 결국에는 data loader를 적용시키지 못했습니다. 해당 오류가 해결되면 data loader를 적용시킬 수 있을 것 같습니다.   


```
Property 'intercept' in type 'DataLoaderInterceptor' is not assignable to the same property in base type 'NestInterceptor<any, any>'.    
  Type '(context: ExecutionContext, next: CallHandler<any>) => Observable<any>' is not assignable to type '(context: ExecutionContext, next: CallHandler<any>) => Observable<any> | Promise<Observable<any>>'.
    Type 'Observable<any>' is not assignable to type 'Observable<any> | Promise<Observable<any>>'.
      Type 'import("C:/Users/mm/Desktop/Study/sparta/99/Assignment_2_MAPIA/node_modules/neo4j-driver/node_modules/rxjs/internal/Observable").Observable<any>' is not assignable to type 'import("C:/Users/mm/Desktop/Study/sparta/99/Assignment_2_MAPIA/node_modules/rxjs/dist/types/internal/Observable").Observable<any>'.
        The types of 'operator.call' are incompatible between these types.
```


<br/>
<br/>

## 🐾 API 

[Postman 주소-링크](https://documenter.getpostman.com/view/15410333/UVC2G8wv)

<br/>

## 🐾 API Test 방법

### 1. 위의 Postman 주소 링크를 클릭하여 Postman으로 들어갑니다.
### 2. 서버 주소가 알맞은지 확인합니다.

![image](https://user-images.githubusercontent.com/41619081/140549043-f899abb8-5521-4111-b56c-4ecffc7b8e76.png)

<br/>

### 3. Create API를 이용하여 각각의 곡, 앨범, 뮤지션을 생성하여 id값을 얻습니다.

![image](https://user-images.githubusercontent.com/41619081/140575288-06fbc578-3080-4d31-9d19-3e440ce314b9.png)

<br/>

### 4. 각각의 얻은 id값을 이용하여 앨범-곡, 뮤지션-곡을 연결 또는 연결해제 합니다.

![image](https://user-images.githubusercontent.com/41619081/140575463-2129757e-8a2d-4718-ab91-60732f9a8934.png)

<br/>

### 5. 각각의 얻은 id값을 이용하여 곡, 앨범, 뮤지션에 대한 원하는 정보를 하나 또는 전부 가져올 수 있습니다. 

![image](https://user-images.githubusercontent.com/41619081/140576239-24d15fa3-22f1-4761-b220-433d39db6225.png)
![image](https://user-images.githubusercontent.com/41619081/140576097-95535ed8-d982-425d-8b53-5f5471d1d238.png)

<br/>

### 6. 각각의 얻은 id값을 이용하여 곡, 앨범, 뮤지션/ 앨범-곡, 뮤지션-곡 연결을 삭제할 수 있습니다.

![image](https://user-images.githubusercontent.com/41619081/140575725-c5692915-8047-4174-be6e-bb080970e0cd.png)

### 7. 각각의 얻은 id값을 이용하여 곡, 앨범, 뮤지션의 정보를 수정할 수 있습니다.

![image](https://user-images.githubusercontent.com/41619081/140576422-3db6d354-4b58-4c2c-8e34-7d7da28a08d6.png)



<br/>
