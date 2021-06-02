
```sh
npm i
npm start
```
# HTTP Methods
## GET

### getAllUsers
http://localhost:4000/api/users

###  getOneUser
http://localhost:4000/api/users/60b7b68ce7777e4170711f93

## DELETE

### deleteUser
http://localhost:4000/api/users/60b7b6a0e7777e4170711f94

## POST

### createUser
http://localhost:4000/api/users
```sh
{
    "firstname": "Ada",
    "lastname": "Livingston",
    "email": "ada.livingston@playce.me",
    "phonenumber": "+1 (800) 518-3983",
    "location": {
      "city": "Barclay",
      "address": "Harbor Lane, 65"
    },
    "social": {
      "facebook": "https://facebook.com/orbixtar",
      "twitter": "https://twitter.com/conjurica",
      "linkedin": "https://linked.in/snowpoke",
      "telegram": "https://t.me/miracula"
    }
  }
```

### createPdf
http://localhost:4000/api/document
```sh
{
	"userId":  "60b7b6a0e7777e4170711f94"
}
```