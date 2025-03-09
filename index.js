require('dotenv').config()
//to make production ready app

const githubData = {
    
        "login": "hariskhan1407",
        "id": 148951890,
        "node_id": "U_kgDOCODTUg",
        "avatar_url": "https://avatars.githubusercontent.com/u/148951890?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/hariskhan1407",
        "html_url": "https://github.com/hariskhan1407",
        "followers_url": "https://api.github.com/users/hariskhan1407/followers",
        "following_url": "https://api.github.com/users/hariskhan1407/following{/other_user}",
        "gists_url": "https://api.github.com/users/hariskhan1407/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/hariskhan1407/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/hariskhan1407/subscriptions",
        "organizations_url": "https://api.github.com/users/hariskhan1407/orgs",
        "repos_url": "https://api.github.com/users/hariskhan1407/repos",
        "events_url": "https://api.github.com/users/hariskhan1407/events{/privacy}",
        "received_events_url": "https://api.github.com/users/hariskhan1407/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": "Haris Khan",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": "Android Developer\r\n",
        "twitter_username": null,
        "public_repos": 9,
        "public_gists": 0,
        "followers": 1,
        "following": 2,
        "created_at": "2023-10-25T08:16:45Z",
        "updated_at": "2025-03-08T23:27:53Z"
      }


const express = require('express')
//express import is done
const app = express()
//express obj is called in app it is like that after import of math v use math.pow and all those
const port = 4000
//listen on port
app.get('/',(req,res)=>{
    res.send("hello world")
})
//ager home route per get req ati hai to ye send karo
app.get('/login',(req,res)=>{
    res.send('<h1>Hello bro </h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>Youtube kholna chah re ho kya be!😂</h2>')
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listen on port ${process.env.PORT}`)
})
//listen is a variable in port