# backend

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run server.js
```

This project was created using `bun init` in bun v1.1.34. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## APIs

http://localhost:4000/api/admin/login

Body
```json
curl --request POST \
  --url http://localhost:4000/api/admin/login \
  --header 'content-type: application/json' \
  --data '{
  "email":"admin@prescripto.com",
  "password":"qwerty123456"
}'
```
http://localhost:4000/api/admin/add-doctor

Body: Form Multipart!
```sh
curl --request POST \
  --url http://localhost:4000/api/admin/add-doctor \
  --header 'content-type: multipart/form-data' \
  --form image=@some/path/doc6.png \
  --form email=e@maile.com \
  --form password=1231314577858 \
  --form degree=MBS \
  --form 'experience=25+' \
  --form 'about=Yes it s me' \
  --form fees=45 \
  --form 'address="{\n            line1: '\''37th Cross, Richmond'\'',\n            line2: '\''Circle, Ring Road, London'\''\n        }"' \
  --form 'speciality=General Physician' \
  --form 'name=John Doe'
```