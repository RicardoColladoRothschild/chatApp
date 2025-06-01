export function signUp(req, res){
console.info("[X] - api/auth: Signing up");
    res.send("Signing up");
}

export function loging(req, res){
    console.info("[X] - api/auth: Loging");
    res.send("Loging in");
}

export function logout(req, res){
    console.info("[X] - api/auth: Loging Out");
    res.send("Logging Out");
}