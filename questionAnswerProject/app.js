'use strict';

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log('Express is listening on port', port)
});