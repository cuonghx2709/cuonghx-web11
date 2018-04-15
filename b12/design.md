## Architecture Design

node sever
mvc
restful

## 1. Collection

- user
    - Avatar
    - UserName
    - PassWord
    - Email
    - Active

- GirlImage
    - ImageUrl
    - Title
    - Description
    - CreatedAt
    - CreatedBy
    - Active
    - like
    - view
    - _id
    - Comment
        - CreateBy
        - Content


## 2. Controller
- CRUD
    - Create
    - Read
    - Update
    - Delete - Never realy delete item: Delete action = set Active to false

## 3. Route // RESTful
Modern day:
 - BackEnd rendering is not popular
 - BackEnd return data instead of HTML
    - node : JSON
 - API: RESTful

 URI: /api/girl-images/
 - POST -> /api/girl-images/ = create new girlImage
 - GET -> /api/girl-images/?page = 1 = read all girlImage
 // req.query.page || default 1 if dont have ?page

 - GET -> /api/girl-images/:id = read one girlImage
 - PUT -> /api/girl-images/:id = updated one girlImage
 - DELETE -> /api/girl-images/:id = delete one girlImage

 - POST = /api/girl-images/:id/like = like image
 - DELETE = /api/girl-images/:id/unlike = unlike image

 - POST = /api/girl-images/:id/comment = comment image
 - DELETE = /api/girl-images/:id/comment/:commentid = comment image

 URI: api/user/

## 4. Cooked Data
 - /api/girl-images/
    - ImageUrl
    - Title
    - Description
    - CreatedAt
    - CreatedBy
    - like
    - view
