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
	knex('userdata').select('essen', 'flex', 'lts', 'expdate', 'currentdate').then((money) => {
		return res.status(200).json({money})
	})
})
app.post('/addpayments', (req, res) => {
	let today = new Date();
	let dd = today.getDate();
	let mm = today.getMonth()+1;
	let yyyy = today.getFullYear();
	if(dd<10) {
    	dd='0'+dd
	} 
	if(mm<10) {
   		mm='0'+mm
	} 
	today = mm+'/'+dd+'/'+yyyy;

	console.log(today);
	knex.insert({
		essen: req.body.essen,
		flex: req.body.flex,
		lts: req.body.lts,
		expdate: today,
		currentdate: today
	}).into('userdata').then(dog => {
		return res.status(201).json({dog})
	}).catch(e => {
		console.error(e)
		res.sendStatus(500)
	})

})
app.put('/userfinanceflex', (req, res) => {
	knex('userdata').where({
		id: 2
	}).update({
		flex: req.body.flex
	}).then(id => {
		return res.json()
	}).catch(e => {
		console.error(e)
	})
})
app.put('/userfinancelts', (req, res) => {
	knex('userdata').where({
		id: 2
	}).update({
		lts: req.body.lts
	}).then(id => {
		return res.json()
	}).catch(e => {
		console.error(e)
	})
})
app.put('/userfinanceessen', (req, res) => {
	knex('userdata').where({
		id: 2
	}).update({
		essen: req.body.essen
	}).then(id => {
		return res.json()
	}).catch(e => {
		console.error(e)
	})
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




