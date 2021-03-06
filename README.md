# ឯកសារ Docker CLI ជាភាសាខ្មែរ

![docker thumbnail](/_thumbnail_doc/docker.jpg "Docker Tutorial")

### និយមន័យនៃ Docker:

- ក្នុងន័យសាមញ្ញ, **Docker** ជាកម្មវិធីមួយដែលសម្រួលដំណើរការនៃការបង្កើតកម្មវិធី, គ្រប់គ្រងកម្មវិធីនិងចែកចាយកម្មវិធីទៅកន្លែងផ្សេងទៀត។ វាធ្វើដូចនេះដោយធ្វើឲ្យគ្រប់ប្រព័ន្ធប្រតិបត្តិការរបស់កុំព្យូទ័រទាំងអស់អាចទាញយកកម្មវិធីនិងដំណើរការកម្មវិធីណាមួយដោយមានភាពងាយស្រួល និងគ្មានការកំណត់រចនាសម្ព័ន្ធអីច្រើននោះទេ។

- **Docker** ត្រូវបានបង្កើតឡើងដោយប្រើភាសា _Golang Programming Language_ ។

### Docker ធ្វើឱ្យការអភិវឌ្ឍន៍ប្រកបដោយមានប្រសិទ្ធភាព:

- **Docker** បានកាត់បន្ថយនូវភាពច្រំដែលនិង ការកំណត់រចនាសម្ព័ន្ធដែលមានភាពស្មុគស្មាញចោល ហើយជំនួសមកវិញជាមួយនឹងវដ្តជីវិតនៃការអភិវឌ្ឍន៍ដែលមានភាពឆាប់រហ័ស, ងាយស្រួល, មានលក្ខណះបត់បែនសម្រាប់ការអភិវឌ្ឍន៍ទាំង `desktop` និង `cloud` ។ **Docker​ Platform** គឺមានលក្ខណះទូលំទូលាយដែលរួមបញ្ចូលជាមួយនឹង UIs, CLIs, APIs, និង Security ដែលបង្កើតឡើងដើម្បីឲ្យអ្នកអាចធ្វើការជាមួយនឹង **Docker** បានយ៉ាងងាយស្រួល។ ខាងក្រោមនេះគឺជាចំណុចធំៗដែលអ្នកត្រូវដឹងមុននឹងឈានដល់ការសិក្សាពី **Docker** ឲ្យស៊ីជម្រៅ:

    - **Build**: ចាប់ផ្តើមដំបូងជាមួយនឹងការសរសេរកូដ បន្ទាប់មក `build` កូដទាំងអស់នោះទៅជា `image` របស់ ***Docker*** ហើយយក `image` នោះមកបង្កើតជាកម្មវិធី(container)ដែលអាចដំណើរការបានទាំង `window`, `mac`, និង `linux` ដោយមានប្រសិទ្ធភាព។ មួយវិញដើម្បីអាចបង្កើត `containers` ជាច្រើននៅក្នុងកម្មវិធីតែមួយបាន គឺអាចប្រើប្រាស់ **Docker Compose** បាន។

    ![docker build thumbnail](/_thumbnail_doc/docker-build.jpg "Docker Build")

    - **Share**: បន្ទាប់ពីអ្នកអាច `build` ជា `image` របស់ **Docker** រួចរាល់ ដូច្នេះបន្ទាប់អ្នកក៏អាច `publish` នូវ `image` ទៅកាន់ **Docker Hub repository** បាន ដើម្បីអាចឲ្យអ្នកអភិវឌ្ឍន៍កម្មវិធីដទៃទៀតអាចទាញយក `image` នោះយកទៅប្រើបន្តទៀតបាន។

    ![docker share thumbnail](/_thumbnail_doc/docker-share.jpg "Docker Build")

    - **Run**: បន្ទាប់ពីអ្នកអាច `build` នូវ `image` របស់ **Docker** និង `share image` ទៅកាន់ **Docker Hub repository** ហើយ បន្ទាប់ពីនេះអ្នកក៏អាចទាញយក `image` របស់អ្នកដទៃហើយយកមកបង្កើតជា `container` នឹងធ្វើការ `run` នូវ `container` នោះបាន។

    ![docker run thumbnail](/_thumbnail_doc/docker-run.jpg "Docker Build")

### Docker Architecture:

![docker architecture thumbnail](/_thumbnail_doc/docker-architecture.png "Docker Architecture")

- ដូចដែលអ្នកបានឃើញនៅក្នុង _Diagram_ ខាងលើចឹង ដែលបានពណ៍នាអំពី **Docker Architecture** ដែលក្នុងនោះគឺឃើញថាមានសមាសភាគសំខាន់ៗជាច្រើន ហើយក៏ឃើញពីសកម្មភាពនៃអ្នកប្រើប្រាស់ធ្វើការបញ្ជាទៅ _Docker Daemon_ តាមរយះ _Client_ ។ល។ តោះឥឡូវទៅមើលការសម្រាយដូចខាងក្រោម:

  - **Docker** ប្រើប្រាស់ទម្រង់ _server-client-architecture_ ដែល **Client** ជា **Docker Client** គឺជាអ្នកប្រើប្រាស់ _Command Line Interface_ ដើម្បីបញ្ជា និងអ្នកដំណើរការ _server_ គឺ **Docker Daemon** ដែលវាដំណើរការនៅលើ _host_ ។

  - នៅមានបន្តទៀត!!!

---

### Commands ពិសេសៗដែលត្រូវប្រើជាប្រចាំថ្ងៃ:

#### - <u>Pulling Image</u>:

```js
$ docker pull nginx
```

- ប្រើសម្រាប់ទាញយក image ចេញពី docker hub ហើយ nginx ជាឈ្មោះរបស់ image ។

#### - <u>Showing Image</u>:

```js
$ docker images ឬ​ $ docker image ls
```

- ប្រើសម្រាប់បង្ហាញនូវ images ដែលមាននៅក្នុង local machine ទាំងអស់។

#### - <u>Running Container</u>:

```js
$ docker run nginx:latest
```

- ប្រើសម្រាប់ run container របស់ image ដែល nginx គឺជាឈ្មោះរបស់ image រីឯ latest ដែលនៅជាប់នោះគឺ​ version របស់ image ហើយត្រូវភ្ជាប់វាជាមួយនឹងសញ្ញា colon(:) នៅពីមុខ version ផង។

```js
$ docker container ls ឬ $ docker ps
```

- ប្រើសម្រាប់បង្ហាញនូវ container ទាំងអស់ដែលកំពុងត្រូវបាន run ។

```js
$ docker run -d nginx:latest
```

- ប្រើសម្រាប់ run container ដូចនឹង docker run nginx:latest ដែរ តែ​ command នេះគឺប្រតិបត្តិលក្ខណះជា detached mode ពោលគឺជា run container ហើយគឺអ្នកអាចប្រើប្រាស់ console ដែលអ្នកកំពុង run container បានធម្មតា តែបើប្រើ command ខាងលើដំបូងនោះវិញគឺមិនអាចប្រើប្រាស់ console បាននោះទេ។

```js
$ docker stop 19411e21c4fa
```

- ប្រើសម្រាប់ stop container ហើយ 19411e21c4fa​​ គឺជាលេខ ID របស់ container ។

#### - <u>Exposing Port</u>:

```js
$ docker run -d -p 9000:80 nginx:latest
```

- ប្រើសម្រាប់ run container ជាលក្ខណះ detached mode ហើយមានការរួមបញ្ចូលជាមួយនឹងការបញ្ជាក់យ៉ាងច្បាស់ជាមួយនឹង expose port ដែលទុកប្រើសម្រាប់ដំណើរការកម្មវិធី nginx ហើយដើម្បីបញ្ជាក់ expose port បាន អ្នកត្រូវប្រើ -p flag ហើយបន្ទាប់គឺ port ដែលអ្នកចង់ដាក់ ហើយបន្ទាប់គឺសញ្ញា colon(:) ហើយបន្ទាប់គឺ port របស់ container នោះផ្ទាល់។

```js
$ docker run -d -p 9000:80 -p 9010:80 nginx:latest
```

- ប្រើសម្រាប់ run container ដូច command ខាងលើដែរ តែអ្នកអាចប្រើ multiple port បាន ពោលគឺអ្នកប្រើ port 9000 ក៏ដំណើរការជោគជ័យ ឬក៏ប្រើ port 9010 ក៏ដំណើរការជោគជ័យ។

```js
$ docker ps -a
```

- ប្រើសម្រាប់បង្ហាញនៅរាល់ container ទាំងអស់ មិនថា container មួយនោះកំពុងត្រូវបាន run ឬ stop ក្តី។

```js
$ docker stop boring_merkle
```

- ប្រើសម្រាប់ stop container ដូចទៅនឹង command ខាងលើដែរតែ command (docker stop 19411e21c4fa) ខាងលើគឺប្រើ ID របស់ container តែ command នេះវិញគឺប្រើឈ្មោះរបស់ container វិញ តែយ៉ាងណាមិញអ្នកចង់ប្រើជម្រើសមួយណាក៏បាន។

```js
$ docker start 19411e21c4fa ឬ $ docker start boring_merkle
```

- ប្រើសម្រាប់ run container ដែលមានរួចជាស្រេច ដែលអ្នកចង់ប្រើជម្រើស start ដោយ ID របស់ container ក៏បាន​ ឬក៏ប្រើជម្រើស​ start ដោយឈ្មោះរបស់ container ក៏បាន។

#### - <u>Managing Containers</u>:

```js
$ docker rm 19411e21c4fa ឬ $ docker rm boring_merkle
```

- ប្រើសម្រាប់លុប container ចោលហើយការលុបមួយនេះ អ្នកអាចលុបដោយប្រើ ID របស់ container ក៏បានឬក៏ឈ្មោះរបស់ container ក៏​បាន ហើយមួយវិញទៀត អ្នកអាចលុប container ចោលបាន លុះត្រាតែ container នោះត្រូវបាន stop ។

```js
$ docker rm -f 19411e21c4fa ឬ $ docker rm -f boring_merkle
```

- ប្រើសម្រាប់លុប container ចោលដូចនឹង command ខាងលើដែរ តែការលុបនេះគឺលុបក្នុងលក្ខណះ force mode គឺមានន័យថាលុប container ចោលដោយមិនចាំបាច់ត្រូវ stop container នោះទេ ហើយការលុបមួយនេះ អ្នកអាចលុបដោយប្រើ ID របស់ container ក៏បានឬក៏ឈ្មោះរបស់ container ក៏​បាន។

```js
$ docker ps -q
```

- ប្រើសម្រាប់បង្ហាញតែ ID របស់ container ដែលកំពុងត្រូវបាន run ។

```js
$ docker ps -aq ឬ $ docker ps -a -q
```

​- ប្រើសម្រាប់បង្ហាញតែ ID របស់ container ទាំង container ដែលកំពុងត្រូវបាន run និងមិនកំពុងត្រូវបាន run ។

```js
$ docker rm $(docker ps -aq)
```

- ប្រើសម្រាប់លុប container ចោលទាំងអស់ដោយប្រើ ID របស់ container សម្រាប់រាល់ containers ដែលត្រូវបាន stop ។

```js
$ docker rm -f $(docker ps -q)
```

- ប្រើសម្រាប់លុប container ចោលទាំងអស់ដែរ តែអ្នកអាចលុបទាំង containers ដែលកំពុងតែត្រូវបាន run ។

#### - <u>Naming Container</u>:

```js
$ docker run -d --name nginx-ms -p 9000:80 nginx:latest
```

- ប្រើសម្រាប់កំណត់ឈ្មោះទៅតាមឈ្មោះអ្វីដែលអ្នកចង់ដាក់ --name គឺជា ​flag តំណាងឲ្យការកំណត់ឈ្មោះ ចំណែកឯ nginx-ms គឺជាឈ្មោះរបស់ container ដែលអ្នកចង់ដាក់។

```js
$ docker ps --format="ID\t{{.ID}}\nNAME\t{{.Names}}\nImage\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"
```

- ប្រើសម្រាប់បង្ហាញនូវ containers ទាំងអស់ដែលកំពុងត្រូវបាន run ក្នុងលក្ខណះ format ងាយស្រួលក្នុងការមើល។

```js
$ export FORMAT="ID\t{{.ID}}\nNAME\t{{.Names}}\nImage\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"
```

- ប្រើសម្រាប់ export path variable នៅក្នុង local machine ដើម្បីងាយស្រួលហៅប្រើលើកក្រោយដោយមិនចាំបាច់សរសេរច្រើនបន្ថែមទៀត។

```js
$ docker ps --format=$FORMAT
```

- ប្រើសម្រាប់បង្ហាញ container ដែលមានលក្ខណះ format ដោយហៅពី path variable មក។

#### - <u>Volumes</u>:

```js
$ docker run --name cambodia-website -d -p 9000:80 -v /home/mengsreang/Desktop/cambodia-website:/usr/share/nginx/html nginx:latest
```

- ប្រើសម្រាប់​ run container ដោយមានកំណត់ជាលក្ខណះ volumes ដែលធ្វើការភ្ជាប់ project ដែលមាននៅក្នុងកុំព្យូទ័ររបស់អ្នកទៅកាន់ server របស់ nginx ក្នុង docker ។​ សម្រាយបន្តិច: -v flag គឺតំណាងឲ្យ volumes រីឯ /home/mengsreang/Desktop/cambodia-website គឺជាទីតាំងរបស់ project របស់អ្នកនៅក្នុងកំព្យូទ័រ ហើយមួយទៀតគឺ /usr/share/nginx/html គឺជាទីតាំង project របស់ nginx server ហើយកុំភ្លេចដាក់សញ្ញា colon(:) នៅពីមុខផង។

```js
$ docker exec -it cambodia-website bash
```

- ប្រើសម្រាប់បង្កើត bash ដើម្បីចូលទៅមើល project នៅក្នុង nginx server ។​ សម្រាយបន្តិច exec គឺតំណាងឲ្យការ execute រីឯ -it គឺមានន័យថា execute bash ជាលក្ខណះ interative mode ។

#### - <u>Dockerfile</u>:

- នៅក្នុងចំណុចនេះនឹងបង្ហាញអ្នកអំពីការប្រើប្រាស់ Dockerfile ដើម្បី build image ផ្ទាល់ខ្លួនមួយសម្រាប់ project នីមួយៗ ដែលឧទាហរណ៍ទីមួយនឹងបង្ហាញអំពីការប្រើប្រាស់ Dockerfile នៅក្នុង project website ធម្មតាដែលប្រើ technology ដូចជា HTML, CSS, JS ដែលអ្នកអាច clone project តាមរយះតំណរនេះបាន `https://github.com/Mengsreang-Chhoeung/cambodia-website`។ បន្ទាប់ពីបាន clone រួចរាល់ អ្នកត្រូវបង្កើត file មួយមានឈ្មោះថា Dockerfile ដែលផ្ទុកនៅក្នុង root project បន្ទាប់មកចូលទៅក្នុង file នោះហើយសរសេរ command ដូចខាងក្រោម:

```js
FROM nginx:latest
COPY . /usr/share/nginx/html
```

- សម្រាយបន្តិច: `FROM nginx:latest` មានន័យថា ក្នុង project មួយនេះគឺអ្នកប្រើ image មកពី nginx ហើយ version ចុងក្រោយ រីឯ `COPY . /usr/share/nginx/html` មានន័យថាចំលង project ពីក្នុង folder នេះទៅដាក់ក្នុង folder របស់ nginx ដែលស្ថិតនៅក្នុង server ។

- បន្ទាប់ទៀត អ្នកត្រូវប្រើ Terminal ហើយត្រូវបញ្ជាក់ខ្លួនឯងឲ្យច្បាស់ថាខ្លួនប្រាកដជាកំពុងឈរនៅក្នុង root project បន្ទាប់មក run command ខាងក្រោម:

```js
$ docker build -t cambodia-website-image:latest . ឬ​ $ docker build --tag cambodia-website-image:latest .
```

- ប្រើសម្រាប់​ build image សម្រាប់ -t ឬ --tag គឺជា flag បញ្ជាក់ពី tag រីឯ cambodia-website-image:latest គឺជាឈ្មោះ image ថ្មីដែលអ្នកអាចដាក់ឈ្មោះអ្វីក៏បាន រីឯសញ្ញា <b>`.`</b> គឺចង់បញ្ជាក់ថា image មួយនឹង build ចេញពី project មួយនឹង។

```js
$ docker run --name cambodia-website-2 -d -p 9010:80 cambodia-website-image:latest
```

- ប្រើសម្រាប់ run container របស់ image ដែលអ្នកបានបង្កើតនៅមុននេះបន្តិច។

```js
FROM node:latest
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD node app.js
```

- Command ខាងលើគឺប្រើក្នុង project របស់ node ដើម្បីធ្វើ api ដែល `FROM node:latest` មានន័យថា pull image node ដែលមានជំនាន់ចុងក្រោយ រីឯ `WORKDIR /app` មានន័យថា application នៅក្នុង project មួយនេះគឺប្រតិបត្តិការនៅក្នុង folder app ក្នុង container របស់ image node រីឯ `ADD package*.json ./` មានន័យថា add file package.json នឹង package-lock.json ចូលទៅក្នុង folder app រីឯ `RUN npm install` មានន័យថា run command ដើម្បី install dependencies ដែលបានកំណត់ទុកនៅក្នុង package.json រីឯ `ADD . .` មានន័យថា add file project ផ្សេងៗទៀតចូលទៅក្នុង folder app រីឯ `CMD node app.js` មានន័យថាប្រើ command cmd ដើម្បីប្រតិបត្តិ api ។ បន្ទាប់មក​ប្រើ command docker build, នឹង run container ដូចខាងក្រោម:

```js
$ docker build -t cambodia-web-api-image:latest .
```

```js
$ docker run -d --name cambodia-web-api -p 9020:3000 cambodia-web-api-image:latest
```

#### - <u>.dockerignore</u>:

- .dockerignore ជា file មួយដែលត្រូវបង្កើតឡើងដូចទៅនឹង Dockerfile ចឹងគឺបង្កើតនៅក្នុង root project ហើយវាប្រើសម្រាប់ ignore file ឬ folder មួយចំនួនកុំឲ្យ build នឹង push ទៅ docker ។

```js
/node_modules
Dockerfile
.gitignore
```

- មានន័យថា ពេល build នឹង push គឺអ្នកនឹងមិនយក folder node_modules, Dockerfile នឹង .gitignore ទៅជាមួយទេ។

#### - <u>Remove Image</u>:

```js
$ docker rmi 5f73314833c3 ឬ​ $ docker rmi cambodia-web-api-image:latest
```

- ប្រើសម្រាប់ remove image តែដើម្បីអាចលុបបាន លុះត្រា container របស់ image នោះត្រូវបាន ​stop ជាមុនសិន។ អ្នកអាចប្រើ ID របស់ container ឬក៏ឈ្មោះរបស់ container ដើម្បីលុបបាន។

### - <u>Reducing Image Size</u>:

```js
$ docker pull nginx:alpine
```

- ប្រើសម្រាប់ pull image ដូចគ្នាតែ pull image បែបមានទំហំតូច។

```js
$ docker run -d --name website -p 9030:80 nginx:latest
```

- ប្រើសម្រាប់ run container របស់ image ដែលប្រើ alpine ។

### - <u>Tags and Versioning</u>:

```js
$ docker pull node:17.0.1
```

- ប្រើសម្រាប់​ pull image ដោយមានជាការកំណត់ version របស់ image ។

```js
$ docker pull node:17.0.1-alpine
```

- ប្រើសម្រាប់ pull image ដោយមានជាការកំណត់ version របស់​ image ដូចគ្នាតែជាលក្ខណះ alpine version ។

```js
$ docker tag cambodia-web-api-web:latest cambodia-web-api-web:2.0.1
```

- ប្រើសម្រាប់ tag ពី image មួយទៅ image ថ្មីមួយទៀត និយាយមួយម៉ាត់ឲ្យខ្លីគឺដូចការ copy និង​ paste អញ្ចឹង។

### - <u>Docker Registries</u>:

```js
$ docker tag cambodia-web-api-web:latest chms7890/website:latest
```

- ប្រើសម្រាប់ tag ពី image ដែលមានស្រាប់ទៅ image ថ្មីមួយទៀតដែលផ្តើមឈ្មោះដោយឈ្មោះរបស់ repository នៅក្នុង dockerhub ។

```js
$ docker login
```

- ប្រើសម្រាប់ login នូវ account docker ។

```js
$ docker push chms7890/website:latest
```

- ប្រើសម្រាប់ push image ទៅកាន់ repository ។

```js
$ docker pull chms7890/website:latest
```

- ប្រើសម្រាប់ pull image មកវិញ។

### - <u>Debugging Containers</u>:

```js
$ docker inspect cambodia-web-api-image:latest ឬ $ docker inspect cambodia-web-api
```

- ប្រើសម្រាប់ inspect មើល detail របស់ image ឬ container ដែលអ្នកអាចប្រើឈ្មោះរបស់ image ឬ container ឬ ID របស់ container ឬ image ក៏បាន។

```js
$ docker logs cambodia-web-api
```

- ប្រើសម្រាប់ log មើលប្រតិបត្តិការរបស់ container ដែលអ្នកអាចប្រើ ID របស់ container ក៏បានឬក៏ឈ្មោះរបស់ container ក៏បាន។

```js
$ docker logs -f cambodia-web-api
```

- ប្រើសម្រាប់ log ដូច command ខាងលើដែរ តែជាលក្ខណះ follow mode គឺមានន័យថា log នឹងដំណើរការរហូតដល់ពេល container ត្រូវបាន stop ។

```js
$ docker system prune
```

- ប្រើសម្រាប់លុបទិន្នន័យដែលមិនត្រូវប្រើចោលទាំងអស់ ដូចជា override image tag ជាដើម។
