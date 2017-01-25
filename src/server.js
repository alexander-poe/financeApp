require('babel-polyfill');
const express = require('express');
const bodyParser = require('body-parser');
const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;
const app = express();

const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://iasrcatn:LIeKBliTQaR2hKpUea4ZwpzDawQsGf8F@babar.elephantsql.com:5432/iasrcatn'
})
app.use(bodyParser.json());
app.get('/userfinance', (req, res) => {
	knex('userData').select('*').then((money) => {
		return res.status(200).json({money})
	})
})
app.post('/addpayments', (req, res) => {
	console.log(req.body)
	knex.insert({
		essen: req.body.essen,
		flex: req.body.flex,
		lts: req.body.lts
	}).into('userdata').then(dog => {
		return res.status(201).json({dog})
	}).catch(e => {
		console.error(e)
		res.sendStatus(500)
	})

})
app.put('/editpayments', (req, res) => {

})

app.delete('/deletepaymententry', (req, res) => {

})
function runServer() {
    return new Promise((resolve, reject) => {
        app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    });
}
if (require.main === module) {
    runServer();
}




