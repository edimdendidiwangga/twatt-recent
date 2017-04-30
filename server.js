const express = require('express');
const app = express()

app.set('port', process.env.PORT || 3000)

app.use('/', require('./routes/index'));

app.listen(app.get('port'), function(){
  console.log('listening on port '+app.get('port'))
})
