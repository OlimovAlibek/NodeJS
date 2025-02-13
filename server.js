const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res) => {
    
    const num = _.random(0,3)
    console.log(num);
    

    res.setHeader('Content-type', 'text/html')

    let path = './views'
    switch(req.url) {
        case '/':
            path = path + "/index.html";
            break;
        case '/about':
            path += "/about.html";
            break;
        case '/about-me':
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break;
        default:
            path += "/404.html"
            break;
    }



    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
        }
        else {
            res.write(data)
            res.end()
        }
    })

    
    
})

server.listen(3000, 'localhost', () => {
    console.log("server is listening requests");
    
})