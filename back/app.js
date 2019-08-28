let express = require('express')
let morgan = require('morgan')
let fetch = require('node-fetch')
let app = express()
const path = require('path');
const User = require('./models/user');
const Post = require('./models/post');
const port = 3101;
const cookieParser = require('cookie-parser');
let session = require('express-session')
const FileStore = require("session-file-store")(session)
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ka_ll:kmn6114786@cluster0-dhab9.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });
const bcrypt = require("bcrypt")
const multer = require('multer')
const fs = require("fs")
let profile = "";


let sessionConfig = {
  secret: 'keyboard cat',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new FileStore({})
}
app.use(express.static('./public'))
app.use(cookieParser());
app.use(session(sessionConfig))
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded());

const corsMiddleware = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true")
  next();
}

app.use(corsMiddleware)

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: function (req, file, cb) {
    cb(null, file.name + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
}).single('image')


//instagram
app.get('/instagram', (req, res) => {
  //console.log("k")
  res.redirect(`https://api.instagram.com/oauth/authorize/?client_id=63c6a274c99f49bd946935fe18091b62&redirect_uri=http://localhost:3101/instagramtoken&response_type=code`)
  //console.log("+++++")
})

app.get('/instagramtoken', async (req, res) => {
  const { code } = req.query
  //console.log(code)
  const data = {
    client_id: '63c6a274c99f49bd946935fe18091b62',
    client_secret: '9302e3334aa549878d4f9ffd83cff32e',
    grant_type: 'authorization_code',
    redirect_uri: `http://localhost:3101/instagramtoken`,
    code: code,
  }
  const formData = Object.keys(data).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
  }).join('&');

  

  const resp = await fetch(`https://api.instagram.com/oauth/access_token`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formData
  });
  const respData = await resp.json()
  console.log(respData);
  const { access_token } = respData;
  

  const user = await User.findOne({ login: profile })
  user.tokenInst = access_token
  await user.save()

res.redirect(`http://localhost:3000/instagram`)
})

app.get('/boolInst', async (req, res) => {
  const user = await User.findOne({ login: req.query.user})
  profile = req.query.user;
  let boolToken = false
  const instToken = user.tokenInst
  if (instToken) {
    boolToken = true
  }
  else {
    boolToken = false
  }
  const posts = await fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${instToken}`)
  const postsData = await posts.json()

  res.json({
    postsData: postsData.data,
    boolToken: boolToken
  })
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
});


// VKontakte getting token - step 1
app.get('/oauth', (req, res) => {
  res.redirect('https://oauth.vk.com/authorize?client_id=7110854&display=page&redirect_uri=http://localhost:3101/vk_code&scope=wall&response_type=code&v=5.101&state=123456')
})
// VKontakte getting token - step 2
app.get('/vk_code', async (req, res) => {
  try {
    const { code } = req.query;
    const response = await fetch(`https://oauth.vk.com/access_token?client_id=7110854&client_secret=YfdX13jLLBZqZz6L2cax&redirect_uri=http://localhost:3101/vk_code&code=${code}`)
    const { access_token, user_id } = await response.json();
    let user = await User.findOne({ login: profile });
    user.vkId = user_id;
    user.vkToken = access_token;
    await user.save();
    // console.log(access_token);
    // console.log(user_id);
    res.redirect('http://localhost:3000/VK');
  } catch (rerror) {
    res.status(404);
  }
});

// VKontakte checking token
app.get("/try", function(req, res){
  profile = req.query.user
  console.log("try");
  res.end();
})

app.get('/vkCheck', async (req, res) => {
  console.log("hi");
  let user = await User.findOne({ login: profile });
  let checkToken;
  if (user.vkToken) {
    checkToken = true;
  } else {
    checkToken = false;
  }
  res.json({
    checkToken: checkToken
  })
});

// VKontakte get wall post with stats
app.get('/wallGet', async (req, res) => {
  let user = await User.findOne({ login: profile });
  const resp = await fetch(`https://api.vk.com/method/wall.get?owner_id=${user.vkId}&filter=owner&count=20&access_token=${user.vkToken}&v=5.101`, {
    headers: {
      "Accept": "application/json"
    }
  });
  const data = await resp.json();
  console.log(data)
  res.json(data.response.items);
  // res.end()
});