const axios = require('axios');

async function getUsers() {
    return axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            return response.data;
        })
}

async function process() {
    getUsers().then((result) => {
        console.log("Here")
        return result
    })
}

async function main() {
    console.log("Starting main function");

    let mainresult = await getUsers();

    console.log("Returned: ", mainresult);
}

main();
