export const getUserSuccess = data => ({
	type: 'get_user_success',
	data
})
export const getUserData = (data) => {
	return dispatch =>  {
		return fetch('http://localhost:8080/getalluserfinance')
			.then(res => {
				return res.json()
			}).then(res => {
				console.log('get success', res)
				return dispatch(getUserSuccess(res))
			})
			.catch(e => {
				console.error('actions gud: ', e)
			})
    }
}
export const getSavingsGoalSuccess = data => ({
	type: 'get_savings_goal_success',
	data
})
export const getSavingsGoal = (data) => {
	return dispatch =>  {
		return fetch('http://localhost:8080/savingsgoal')
			.then(res => {
				return res.json()
			}).then(res => {
				console.log('get success', res)
				return dispatch(getSavingsGoalSuccess(res))
			})
			.catch(e => {
				console.error('actions ge: ', e)
			})
    }
}
export const getEnvelopesSuccess = env => ({
	type: 'get_envelopes_success',
	env
})
export const getEnvelopes = (env) => {
	return dispatch =>  {
		return fetch('http://localhost:8080/envelopes')
			.then(res => {
				return res.json()
			}).then(res => {
				console.log('get env success', res)
				return dispatch(getEnvelopesSuccess(res))
			})
			.catch(e => {
				console.error('actions ge: ', e)
			})
    }
}
export const addSavingsGoal = (title, totalamount, currentamount, datedesired, status) => {
  return dispatch => {
  	return fetch('http://localhost:8080/savingsgoal',
		{
			method: "POST",
			body: JSON.stringify({
				title,
				totalamount,
				currentamount,
				datedesired,
				status
			}),
			headers: { "Content-Type" : "application/json" }
		}).then(res => {
			if (res.status >= 300) {
				throw new Error(res.statusText)	
			} 
			return res
		}).then(res => {
			console.log('post savings goal success')
		}).catch(e => {
			console.error('actions asg: ', e)
		})	
    }
} 
export const updateSavingsBal = (id, currentamount) => {
	console.log(id, currentamount);
	return dispatch => {
		return fetch('http://localhost:8080/savingsgoaladd',
		{
			method: "PUT",
			body: JSON.stringify({
				id,
				currentamount
			}),
			headers: { "Content-Type" : "application/json" }
		}).then(res => {
			if (res.status >= 300) {
				throw new Error(res.statusText)
			}
			return res
		}).then(res => {
			console.log('update savings goal bal success')
		}).catch(e => {
			console.error('actions usb: ', e)
		})

	}
}
export const updateSavingsDate = (id, datedesired) => {
	return dispatch => {
		return fetch('http://localhost:8080/savingsgoaldate',
		{
			method: "PUT",
			body: JSON.stringify({
				id,
				datedesired
			}),
			headers: { "Content-Type" : "application/json" }
		}).then(res => {
			if (res.status >= 300) {
				throw new Error(res.statusText)
			}
			return res
		}).then(res => {
			console.log('update savings goal date success')
		}).catch(e => {
			console.error('actions usd: ', e)
		})

	}
}

export const addEnvelopes = (title, totalamount, currentamount, resetdate) => {
  return dispatch => {
  	return fetch('http://localhost:8080/envelopes',
		{
			method: "POST",
			body: JSON.stringify({
				title,
				totalamount,
				currentamount,
				resetdate
			}),
			headers: { "Content-Type" : "application/json" }
		}).then(res => {
			if (res.status >= 300) {
				throw new Error(res.statusText)	
			} 
			return res
		}).then(res => {
			console.log('post envelope success')
		}).catch(e => {
			console.error('actions ae: ', e)
		})	
    }
} 
export const updateEnvBal = (id, currentamount) => {
	return dispatch => {
		return fetch('http://localhost:8080/envelope',
		{
			method: "PUT",
			body: JSON.stringify({
				id,
				currentamount
			}),
			headers: { "Content-Type" : "application/json" }
		}).then(res => {
			if (res.status >= 300) {
				throw new Error(res.statusText)
			}
			return res
		}).then(res => {
			console.log('update envelope bal success')
		}).catch(e => {
			console.error('actions ueb: ', e)
		})

	}
}
export const updateEnvDate = (id, resetdate) => {
	return dispatch => {
		return fetch('http://localhost:8080/envelopedate',
		{
			method: "PUT",
			body: JSON.stringify({
				id,
				resetdate
			}),
			headers: { "Content-Type" : "application/json" }
		}).then(res => {
			if (res.status >= 300) {
				throw new Error(res.statusText)
			}
			return res
		}).then(res => {
			console.log('update envelope date success')
		}).catch(e => {
			console.error('actions ued: ', e)
		})

	}
}
export const addPaymentSuccess = data => {
	type: 'add_payment_success',
	data
}
export const addPayment = (essen, flex, lts, expdate) => {
  return dispatch => {
  	return fetch('http://localhost:8080/addpayments',
		{
			method: "POST",
			body: JSON.stringify({
				essen,
				flex,
				lts,
				expdate
			}),
			headers: { "Content-Type" : "application/json" }
		}).then(res => {
			if (res.status >= 300) {
				throw new Error(res.statusText)	
			} 
			return res
		}).then(res => {
			console.log('post success')
		}).catch(e => {
			console.error('actions ap: ', e)
		})	
  }
} 

export const updateEssen = (essen) => {
	console.log('actions', essen)
	return dispatch => {
		return fetch('http://localhost:8080/userfinanceessen',
		{
			method: "PUT",
			body: JSON.stringify({
				essen
			}),
			headers: { "Content-Type" : "application/json" }
		}).then(res => {
			if (res.status >= 300) {
				throw new Error(res.statusText)
			}
			return res
		}).then(res => {
			console.log('update essentials success')
		}).catch(e => {
			console.error('actions ue: ', e)
		})

	}
}

export const updateFlex = (flex) => {
	console.log('actions', flex)
	return dispatch => {
		return fetch('http://localhost:8080/userfinanceflex',
		{
			method: "PUT",
			body: JSON.stringify({
				flex
			}),
			headers: { "Content-Type" : "application/json" }
		}).then(res => {
			if (res.status >= 300) {
				throw new Error(res.statusText)
			}
			return res
		}).then(res => {
			console.log('update flex success')
		}).catch(e => {
			console.error('actions uf: ', e)
		})

	}
}

export const updateLts = (lts) => {
	console.log('actions', lts)
	return dispatch => {
		return fetch('http://localhost:8080/userfinancelts',
		{
			method: "PUT",
			body: JSON.stringify({
				lts
			}),
			headers: { "Content-Type" : "application/json" }
		}).then(res => {
			if (res.status >= 300) {
				throw new Error(res.statusText)
			}
			return res
		}).then(res => {
			console.log('update lts success')
		}).catch(e => {
			console.error('actions ul: ', e)
		})

	}
}


