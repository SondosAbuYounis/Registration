// const express=require('express')
// const cors=require('cors')
// const User=require('./firebase')
// const app=express()
// app.use(express.json())
// app.use(cors())

// app.post("/create", async(req,res)=>{
//     const data=req.body
//     console.log("Data of users", data)
//     // await User.add(data)
//     res.send({msg:"User Added"})
// })

// app.listen(4000,()=>console.log("Up and Running *4000"))



    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
    import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyA6ZyQVZFfkLgucHLZdOhurm_uJDP__gys",
      authDomain: "registrationform-1f4b3.firebaseapp.com",
      projectId: "registrationform-1f4b3",
      storageBucket: "registrationform-1f4b3.appspot.com",
      messagingSenderId: "67544222636",
      appId: "1:67544222636:web:7a26419fa040aef132c809",
      measurementId: "G-LT3R5WTL54"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);

    // to get the user inputs 
    const regInfo = document.getElementById(registrationForm);
    
