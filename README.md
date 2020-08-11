# Xchange

## Setup
After doing a git pull, run the following commands from the terminal:
```console
cd client
yarn install
```

## File structure
step157-2020

    |- client

        |-public

        |-src

    |-src

        |-main

            |-java

                |-com

                    |-google

                        |-sps

                            |-servlets

            |-webapp

                |-WEB_INF

    pom.xml
    
    README.md

## Development
### Frontend
If you will be primarily working on the frontend, then this setup should work better. Even if you will only briefly be working on the frontend, it's worth it to go through these steps.
You will need two terminal sessions for this.
#### Terminal 1
From the root folder (step157-2020), run the following:
```console
mvn clean package appengine:run
```
This should get the backend running on port 8080 (if you are using cloudshell. If you are not, you might have to make some adjustments).
You can preview it if you would like.

#### Terminal 2
Open a second terminal (leave the first one running). cd into your root folder. If this is your first time, run the following:
```console
cd client
touch .env
```
Add this line to the .env file you just created: PORT=5000
This is because create-react-app automatically runs on port 3000, but so does cloudshell. If you use another code editor, you might be able to skip this.

Now (still in the client directory), run
```console
yarn start
```
This starts the development server. Changes you save to the files you work with in the client directory will automatically refresh the server.
This is why this is better if you will be making more frontend changes. Usually, these changes should reflect in the browser without needing a refresh. However, this might nor happen for you (reasons unclear). You can consider a browser extension to automatically refresh the page often to get the same effect.

To close the development server, press ctrl + C.

### Backend
If you make any changes to the backend, you will likely need to restart the server. This is simple. Just run
```console
mvn clean package appengine:run
```

This will take some time because there are some build steps, however, it is still only a few seconds.

### Note:
When you run the dev server and preview, you will see the same changes as when you run the front and back differently.
You can choose to use only the "backend" method, however, you might find the build time annoying.

## Helpful tools
Since this project uses React and Redux, the React Development Tools and Redux DevTools chrome extensions are extremely helpful and can save a lot of debugging time.