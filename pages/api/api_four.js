const handler = async (req, res) => {
  try {
    const mailresponse = await fetch('https://mail.ratinavan.com/send', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.apikey,
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(req.body)

      body: formatMessage(JSON.stringify(req.body))
  })
    res.status(200).send(mailresponse);
    
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

function formatMessage(body){
  var message = '';
  console.log(body);

  var obj = JSON.parse(body);
  var items = [];

  for (var i in obj){
    items.push(obj[i]);
  }

  console.log(items);

  message = 'New Comission Request! ' + items[0] + ' would like to order a ' + items[4] + ' ' + items[2] + ' of ' + items[3] + 
  '. Contact them at ' + items[1];

  return message;
}


export default handler;