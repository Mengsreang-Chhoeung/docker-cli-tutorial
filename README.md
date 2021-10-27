# ឯកសារ Docker CLI ជាភាសាខ្មែរ

![docker thumbnail](/_thumbnail_doc/docker.jpg "Docker Tutorial")

- ក្នុងន័យសាមញ្ញ, **Docker** ជាកម្មវិធីមួយដែលសម្រួលដំណើរការនៃការបង្កើតកម្មវិធី, គ្រប់គ្រងកម្មវិធីនិងចែកចាយកម្មវិធីទៅកន្លែងផ្សេងទៀត។ វាធ្វើដូចនេះដោយធ្វើឲ្យគ្រប់ប្រព័ន្ធប្រតិបត្តិការរបស់កុំព្យូទ័រទាំងអស់អាចទាញយកកម្មវិធីនិងដំណើរការកម្មវិធីណាមួយដោយមានភាពងាយស្រួល និងគ្មានការកំណត់រចនាសម្ព័ន្ធអីច្រើននោះទេ។

- **Docker** ត្រូវបានបង្កើតឡើងដោយប្រើភាសា _Golang Programming Language_ ។

## Docker Architecture

![docker architecture thumbnail](/_thumbnail_doc/docker-architecture.png "Docker Architecture Tutorial")

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