# SETUP

- First make sure that npm is install in your system.
- Install expo through npm if not installed previously.
```
npm install --global expo-cli
```
- Clone this repository to your local system.
```
https://github.com/BizAcuity/ExpoBaseTemplate.git
```
- After cloning go into the repo and install dependencies using expo.
```
npm add expo
```
- This template provides the functionaly to add .env files. Create a new .env file using .env.example file and you access your enviromental variable by:
```
# .env file
APP_URL="http://localhost:1900"

# access variable using
process.env.APP_URL
```
- Now you can start developing your project using this basic template.
