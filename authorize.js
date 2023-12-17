const authorize = (req, res, next) => {
 console.log("authorize");
  const {user} = req.query
  if(user === "john"){
    //query.user === {name: "john", id: 100}
    next()
  }else{
    res.send("Unauthorized")
  }
}

module.exports = authorize;