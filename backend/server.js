import express from 'express';

const app = express();

const PORT = 5001;


app.get("/api/auth/signup", (req,res)=>{
    console.log("[X] - Receiving a request for Signup");
    res.send("Sign up Route");
});

app.get("/api/auth/login", (req,res)=>{
    console.log("[X] - Receiving a request for login");
    res.send("Login Route");
});

app.get("/api/auth/logout", (req,res)=>{
    console.log("[X] - Receiving a request for logout");
    res.send("Logout Route");
});

app.listen(PORT, ()=>{
    console.log(`[X] - Starting main server`);
    console.log(`server running on http://localhost:${PORT} `);
});