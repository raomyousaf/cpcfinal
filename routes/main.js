

// app.get('/', (req, res) => {
//     res.render("./login"); 
//     console.log("test");
//    })
   
//    app.post("/dashboard", (req, res) => {
//      res.render("Dashboard");
//    });
 
//const addshipmnets = async (req, res) => {
    //     const { br_code, br_name, br_city, br_address, br_contact, br_email } = req.body;
    //     const blog = await Branch.create({
    //       br_code,
    //       br_name ,
    //       br_city,
    //       br_address,
    //       br_contact,
    //       br_email,
    //     })
    //     res.redirect("/");
    //   };
    


const loginPage = (req,res) => {
    res.render("./login"); 
}

const dashboard =  (req, res) => {
        res.render("./Dashboard");
     };




   module.exports = { loginPage,dashboard  };