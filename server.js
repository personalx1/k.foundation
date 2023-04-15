
const express = require('express')
const app = express()
const port = process.env.PORT || 5500;
const path = require('path');
 
const userx = require('./firebase');

app.use("/img",express.static('img'));

app.use(express.json());
app.use(express.urlencoded());



app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/public/index.html'))
})

app.post('/', async(req, res)=>{
  let user_data = req.body;
  await userx.add(user_data);
    console.log(user_data)
    res.sendFile(__dirname+'/public/thanks.html')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})







// //firebase

// // Import the functions you need from the SDKs you need
// 
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//  
// };

// // Initialize Firebase
// const app1 = initializeApp(firebaseConfig);
// 
// //firebase


















