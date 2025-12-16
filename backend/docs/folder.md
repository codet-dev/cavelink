# Folder API Spec

## Create Folder API
Endpoint : POST /api/folders

Headers: 
- Authorization : token


Request Body : 
```json
{
  "title" : "catatan 1"
}
```
Response Body Success : 
```json
{
  "data" : {
    "id" : 1,
    "title" : "catatan 1"
  }
}
```

Response Body Error : 
``` json
{
    "errors" : "Unauthorized"
}
```


## Update Folder API
Endpoint : PUT /api/folders/:id

Headers: 
- Authorization : token


Request Body : 
```json
{
  "title" : "catatan 1"
}
```
Response Body Success : 
```json
{
  "data" : {
    "id" : 1,
    "title" : "catatan 1"
  }
}
```

Response Body Error : 
``` json
{
    "errors" : "Unauthorized"
}
```


## GET Folder API
Endpoint : GET /api/folders/:id

Headers: 
- Authorization : token


Response Body Success : 
```json
{
  "data" : {
    "id" : 1,
    "title" : "catatan 1"
  }
}
```
Response Body Error : 
```json
{
    "errors": "title is not found"
}
```

## List Page API
Endpoint: GET /api/folders

Headers: 
- Authorization : token

Response Body Success : 
```json
{
  "data" : [
  {
    "id" : 1,
    "title" : "catatan 1"
  },
  {
    "id" : 2,
    "title" : "catatan 2"
  }
  ],
}
```



## Search Folder API
Endpoint : GET /api/folders

Headers: 
- Authorization : token

Query params :

- title : search by title using like, optional
- page : number of page, default 1
- size : size per page, default 10


Response Body Success : 
```json
{
  "data" : [
  {
    "id" : 1,
    "title" : "catatan 1"
  },
  {
    "id" : 2,
    "title" : "catatan 2"
  }
  ],
  "paging":{
    "page" : 1,
    "total_page" : 3,
    "total_item": 10
     
  }
}
```
 
Response Body Error :


## Remove Folder API 
Endpoint : DELETE /api/folders/:id

Headers: 
- Authorization : token


Response Body Success : 
```json
{
    "data": "OK"
}
```
Response Body Error :
```json
{
    "errors": "title is not found"
}
```

