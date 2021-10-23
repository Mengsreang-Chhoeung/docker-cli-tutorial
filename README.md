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

```js
$ docker pull nginx
```

- ប្រើសម្រាប់ទាញយក image ចេញពី docker hub ហើយ nginx ជាឈ្មោះរបស់ image ។

```js
$ docker images ឬ​ $ docker image ls
```

- ប្រើសម្រាប់បង្ហាញនូវ images ដែលមាននៅក្នុង local machine ទាំងអស់។

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

- ប្រើសម្រាប់ run container ដែលមានរួចជាស្រេច ដែលចង់ប្រើជម្រើស start ដោយ ID របស់ container ក៏បាន​ ឬក៏ប្រើជម្រើស​ start ដោយឈ្មោះរបស់ container ក៏បាន។