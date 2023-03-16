function testAPI(){
    const URL = 'https://jsonplaceholder.typicode.com/users?id=11';

    fetch(URL, otherParam)
        // .then(response => response.json())
        // .then(json => console.log(json));
    
        // .then(response => {
        //     if(response.ok) {
        //         console.log("Success");
        //     } else {
        //         console.log("Not successful");
        //     }
        // });
}

// Test the API with username and password as additional parameters
// Will return status 200 with correct credentials and 404 with wrong ones
function testNetzAuthAPI(username, password){
    const URL = 'https://netzwelt-devtest.azurewebsites.net/Account/SignIn';
    const data = {
        username: username,
        password: password
    };
    
    const otherParam = {
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data),
        method: "POST"
    };
    
    fetch(URL, otherParam)    
        .then(response => console.log(response.status));  
}

testNetzAuthAPI("fool", "bar");