# Developer Manual
## Setup Instructions

To make changes to this, repository, you need to download node and npm.
Documentation for these can be viewed [here](https://nodejs.org/en/download/package-manager)

You should be using v22

````text
```
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# download and install Node.js
nvm install 22
```
````

The following are the npm dependencies currently needed:
- "@supabase/supabase-js": "^2.43.2",
- "body-parser": "^1.20.2",
- "express": "^4.19.2",
- "nodemon": "^3.1.0"

You can do this by doing:

````text
```
npm install [dependency]
```
````

More information [here](https://docs.npmjs.com/cli/v10/commands/npm-install)


## Running the server
You can start your own local version by using

````text
```
npm start
```
````

This will allow you to make the API calls to your local instance of the server.
The endpoints interact with a database that stores JSON recipes.
The format of these JSONS can be read about [here](https://developer.edamam.com/edamam-docs-recipe-api)

There is a GET and POST endpoint setup for these. Assuming you are running it locally,
you can test with the endpoint
http://127.0.01:3000/plans

The GET endpoint will return every single entry in the database. These will be
in the form of JSONs that can be read as recipes.

The POST endpoint will take in a JSON under recipes. This is a short example entry:

````text
```
{
    "recipe": "{
            "uri": "string",
            "label": "string",
            "image": "string",
            "instructions": ["string"]
    }"
}
```
````

## Running the server
In the future, we need to enforce typings and formats for our database. Currently, these is no
protections against this and the database will assume that all JSON inputs are valid.
Through the website end, this can mean that an incomplete JSON can be stored in the
database. Switching to typescript can partially help remedy this issue.
