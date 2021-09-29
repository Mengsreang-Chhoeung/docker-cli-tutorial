# ឯកសារ Docker CLI ជាភាសាខ្មែរ

![docker thumbnail](/_thumbnail_doc/docker.jpg "Docker Tutorial")

- ក្នុងន័យសាមញ្ញ, **Docker** ជាកម្មវិធីមួយដែលសម្រួលដំណើរការនៃការបង្កើតកម្មវិធី, គ្រប់គ្រងកម្មវិធីនិងចែកចាយកម្មវិធីទៅកន្លែងផ្សេងទៀត។ វាធ្វើដូចនេះដោយធ្វើឲ្យគ្រប់ប្រព័ន្ធប្រតិបត្តិការរបស់កុំព្យូទ័រទាំងអស់អាចទាញយកកម្មវិធីនិងដំណើរការកម្មវិធីណាមួយដោយមានភាពងាយស្រួល និងគ្មានការកំណត់រចនាសម្ព័ន្ធអីច្រើននោះទេ។

- **Docker** ត្រូវបានបង្កើតឡើងដោយប្រើភាសា _Golang Programming Language_ ។

## Docker Architecture

![docker architecture thumbnail](/_thumbnail_doc/docker-architecture.png "Docker Architecture Tutorial")

- ដូចដែលអ្នកបានឃើញនៅក្នុង _Diagram_ ខាងលើចឹង ដែលបានពណ៍នាអំពី **Docker Architecture** ដែលក្នុងនោះគឺឃើញថាមានសមាសភាគសំខាន់ៗជាច្រើន ហើយក៏ឃើញពីសកម្មភាពនៃអ្នកប្រើប្រាស់ធ្វើការបញ្ជាទៅ _Docker Daemon_ តាមរយះ _Client_ ។ល។ តោះឥឡូវទៅមើលការសម្រាយដូចខាងក្រោម:
    - **Docker** ប្រើប្រាស់ទម្រង់ _server-client-architecture_ ដែល **Client** ជា **Docker Client** គឺជាអ្នកប្រើប្រាស់ _Command Line Interface_ ដើម្បីបញ្ជា និងអ្នកដំណើរការ _server_ គឺ **Docker Daemon** ដែលវាដំណើរការនៅលើ _host_ ។