
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'seacello.correa@gmail.com',
      pass: 'M@*90!glg'
    }
  });
  
  app.post("/send-bottle-mail", async (req, res) => {
  
      var mailOptions = {
          from: `${req.body.sender}`,
          to: 'macorrea-@hotmail.com',
          subject: 'You received a bottle mail!',
          html: `
          
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <link rel="stylesheet" href="style.css">
              <link rel="preconnect" href="https://fonts.googleapis.com">
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
              <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">
              <style>
                  .container {
                  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/65ba2e79-927a-479c-9657-e8328234db04/d610wre-62096d9e-af8a-45c9-83ef-5b61a003852b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY1YmEyZTc5LTkyN2EtNDc5Yy05NjU3LWU4MzI4MjM0ZGIwNFwvZDYxMHdyZS02MjA5NmQ5ZS1hZjhhLTQ1YzktODNlZi01YjYxYTAwMzg1MmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.M1FJyjBeRQ80ErUWflVUxaInnerzSstUHyVG7-ndlnE");
                  background-size: 907px;
                  background-repeat: repeat-y;
                  margin: auto;
                  padding: 20px 50px 50px 50px;
                  width: 80%;
                  height: 100%;
                  }
  
                  .parchment {
                  font-family: 'Great Vibes', cursive;
  
                  }
                  
                  .header {
                      font-size: 35px;
                      text-align: right;
                  }
  
                  .title {
                  font-size: 50px;
                  }
  
                  .content {
                  font-size: 30px;
                  text-align: justify;
                  text-justify: inter-word;
                  }
  
                  .sender {
                  text-align: right;
                  font-size: 35px;
                  }
  
              </style>
              </head>
              <body>
                  <div class="container">
                      <p class="header parchment">${req.body.header}</p>
                      <p class="title parchment"><strong>${req.body.title}</strong></p>
                      <p class="content parchment">${req.body.content}</p>
                      <p class="sender parchment"> ${req.body.sender}</p>
                  </div>
  
              </body>
              </html>
          
      `};
  
      // transporter.sendMail(mailOptions, function(error, info){
      //     if (error) {
      //         console.log(error);
      //     } else {
      //         console.log('Email sent: ' + info.response);
      //     }
      // });
  
      res.status(200).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="style.css">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">
          <style>
              .container {
              background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/65ba2e79-927a-479c-9657-e8328234db04/d610wre-62096d9e-af8a-45c9-83ef-5b61a003852b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY1YmEyZTc5LTkyN2EtNDc5Yy05NjU3LWU4MzI4MjM0ZGIwNFwvZDYxMHdyZS02MjA5NmQ5ZS1hZjhhLTQ1YzktODNlZi01YjYxYTAwMzg1MmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.M1FJyjBeRQ80ErUWflVUxaInnerzSstUHyVG7-ndlnE");
              background-size: 700px;
              background-repeat: repeat-y;
              margin: auto;
              padding: 20px 50px 50px 50px;
              width: 80%;
              height: 100%;
              }
  
              .parchment {
              font-family: 'Great Vibes', cursive;
  
              }
              
              .header {
                  font-size: 35px;
                  text-align: right;
              }
  
              .title {
              font-size: 50px;
              }
  
              .content {
              font-size: 30px;
              text-align: justify;
              text-justify: inter-word;
              }
  
              .sender {
              text-align: right;
              font-size: 35px;
              }
  
          </style>
          </head>
          <body>
              <div class="container">
                  <p class="header parchment">${req.body.header}</p>
                  <p class="title parchment"><strong>${req.body.title}</strong></p>
                  <p class="content parchment"> ${req.body.content}</p>
                  <p class="sender parchment"><strong>${req.body.sender}<strong></p>
              </div>
  
          </body>
          </html>
      `);
  })
  