const handler = async (req, res) => {
  try {
    console.log(`here`)
    const mailresponse = await fetch('https://mail.ratinavan.com/send', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.apikey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
  })
    res.status(200).send(mailresponse);
    
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;