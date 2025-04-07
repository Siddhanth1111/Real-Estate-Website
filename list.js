


// POST route to handle the form submission at "/list"
app.post('/list', (req, res) => {
  // Destructure form data from req.body
  const { propertyName, price, imageLink, address } = req.body;

  // You can process the data here (e.g., save to a database)
  list.create({
    propertyName,
    price,
    imageLink,
    address
  })
  
});

// Start the server on port 3000


const PORT = 8080;
app.listen(PORT,()=>{
    console.log("Server started");
})
