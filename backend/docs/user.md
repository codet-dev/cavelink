# User api spec

## Register user API

Endpoint :  POST /api/users

Request Body :  

``` json
{
    "username" : "pzn",
    "password" : "rahasia",
    "name" : "Programmer zaman now "
}
```

Response Body Success: 
``` json
{
    "username" : "pzn",
    "name" : "Programmer zaman now "
}
```

Response Body Error : 
``` json
{
    "errors" : "Username already registered"
}
```

## Login user api
Endpoint : POST /api/users/login

request Body : 
```json
{
    "username" : "pzn",
    "password" : "rahasia"
}
```

Response Body : 
``` json
{
    "data" : {
        "token" : "unique-token"
    }
}
```

Response Body Error : 
``` json
{
    "errors" : "Username or Password wrong"
}
```


## Update User API

Endpoint : PATCH /api/users/current

Headers:
- Authorization : token

Request Body : 

``` json
{
    
    "name" : "Programmer zaman now lagi ",
    "password" : "new password"
}
```

Response Body Success : 

``` json
{
    "data" : {
        "username" : "pzn",
        "name" : "Programmer zaman now lagi ",
    }
}
```

Response Body Error : 
``` json
{
    "errors" : "Name length max 180"
}
```


## Get user api

Endpoint: GET /api/users/current

Headers:
- Authorization : token

Response Body Success : 

``` json
{
    "data" : {
        "username" : "pzn",
        "name" : "Programmer zaman now  ",
    }
}
```

Response Body Error : 
``` json
{
    "errors" : "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers:
- Authorization : token

Response Body success : 

``` json
{
    "data" : "OK"
}
```

Response Body Error : 
``` json
{
    "errors" : "Unauthorized"
}
```
