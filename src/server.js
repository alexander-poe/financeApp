require('babel-polyfill');
const dotenv = require('dotenv');
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
	knex('userdata').where({id: 1}).select('essen', 'flex', 'lts', 'expdate', 'currentdate').then((money) => {
		return res.status(200).json({money})
	})
})
app.get('/getalluserfinance', (req, res) => {
	knex('userdata').select('essen', 'flex', 'lts', 'expdate', 'currentdate').then((money) => {
		return res.status(200).json(money)
	})
})
app.get('/envelopes', (req, res) => {
	knex('envelopes').select('title', 'totalamount', 'currentamount', 'resetdate').then((env) => {
		return res.status(200).json({env})
	})
})
app.get('/savingsgoal', (req, res) => {
	knex('savingsgoal').select('title', 'totalamount', 'currentamount', 'datedesired', 'status').then((data) => {
		return res.status(200).json(data)
	})
})
app.post('/envelopes', (req, res) => {
	knex.insert({
		title: req.body.title,
		totalamount: req.body.totalamount,
		currentamount: req.body.currentamount,
		resetdate: req.body.resetdate
	}).into('envelopes').then(id => {
		return res.status(201).json({})
	}).catch(e => {
		console.error(e)
		res.sendStatus(500)
	})
})
app.post('/savingsgoal', (req, res) => {
	knex.insert({
		title: req.body.title,
		totalamount: req.body.totalamount,
		currentamount: req.body.currentamount,
		datedesired: req.body.datedesired,
		status: req.body.status
	}).into('savingsgoal').then(id => {
		return res.status(201).json({})
	}).catch(e => {
		console.error(e);
		res.sendStatus(500);
	})
})
app.put('/savingsgoaladd', (req, res) => {
	knex('savingsgoal').where({
		id: req.body.id
	}).update({
		currentamount: req.body.currentamount
	}).then(id => {
		return res.json({})
	}).catch(e => {
		console.error(e);
	})
})

app.put('/savingsgoaldate', (req, res) => {
	knex('savingsgoal').where({
		id: req.body.id
	}).update({
		datedesired: req.body.datedesired
	}).then(id => {
		return res.json({})
	}).catch(e => {
		console.error(e);
	})
})

app.put('/savingsgoalstatus', (req, res) => {
	knex('savingsgoal').where({
		id: 2
	}).update({
		status: req.body.status
	}).then(id => {
		return res.json({})
	}).catch(e => {
		console.error(e);
	})
})
app.delete('/savingsgoal', (req, res) => {
	knex('savingsgoal').where({
		id: req.body.id
	}).del().then(id => {
		return res.json({})
	}).catch(e => {
		console.error(e)
		res.sendStatus(500)
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
	knex.insert({
		essen: req.body.essen,
		flex: req.body.flex,
		lts: req.body.lts,
		expdate: req.body.expdate,
		currentdate: today
	}).into('userdata').then(id => {
		return res.status(201).json({})
	}).catch(e => {
		console.error(e)
		res.sendStatus(500)
	})

})
app.put('/envelope', (req, res) => {
	knex('envelopes').where({
		id: 2
	}).update({
		currentamount: req.body.currentamount
	}).then(id => {
		return res.json({})
	}).catch(e => {
		console.error(e);
	})
})

app.put('/envelopedate', (req, res) => {
	knex('envelopes').where({
		id: 2
	}).update({
		resetdate: req.body.resetdate
	}).then(id => {
		return res.json({})
	}).catch(e => {
		console.error(e);
	})
})

app.delete('/envelope', (req, res) => {
	knex('envelopes').where({
		id: req.body.id
	}).del().then(id => {
		return res.json({})
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
		return res.json({})
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




