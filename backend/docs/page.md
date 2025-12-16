# Folder API Spec

## Create Page API
Endpoint: POST /api/folders/:folderId/pages

Headers: 
- Authorization : token


Request Body : 
```json
{
  "title" : "catatan 1",
  "description" : "ini adalah catatan 1 "
}
```
Response Body Success : 
```json
{
  "data" : {
    "id" : 1,
    "title" : "catatan 1",
    "description" : "ini adalah catatan 1 "
  }
}
```

Response Body Error : 
``` json
{
    "errors" : "Unauthorized"
}
```


## Update Page API
Endpoint: PUT /api/folders/:folderId/pages/:pageId
Headers: 
- Authorization : token


Request Body : 
```json
{
  "title" : "catatan 1",
  "description" : "ini adalah catatan 1 "
}
```
Response Body Success : 
```json
{
  "data" : {
    "id" : 1,
    "title" : "catatan 1",
    "description" : "ini adalah catatan 1 "
  }
}
```

Response Body Error : 
``` json
{
    "errors" : "Unauthorized"
}
```


## GET Page API
Endpoint: GET /api/folders/:folderId/pages/:pageId

Headers: 
- Authorization : token


Response Body Success : 
```json
{
  "data" : {
    "id" : 1,
    "title" : "catatan 1",
    "description" : "ini adalah catatan 1 "
  }
}
```
Response Body Error : 
```json
{
    "errors": "title is not found"
}
```
## Search Page API
Endpoint: GET /api/folders/:foldersId/pages

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
    "title" : "catatan 1",
    "description" : "ini adalah catatan 1 "
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

## List Page API
Endpoint: GET /api/folders/:folderId/pages

Headers: 
- Authorization

Response Body Success : 
```json
{
  "data" : [
  {
    "id" : 1,
    "title" : "catatan 1",
    "description" : "ini adalah catatan 1 "
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



## Remove Page API 
Endpoint : DELETE /api/folders/:folderId/pages/:pageId

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

