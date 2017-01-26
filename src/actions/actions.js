

export const getUserSuccess = data => ({
	type: 'get_user_success',
	data
})

export const getUserData = (data) => {
	return dispatch =>  {
		return fetch('http://localhost:8080/userfinance')
			.then(res => {
				return res.json()
			}).then(res => {
				console.log(res)
				console.log('get success', res)
				return dispatch(getUserSuccess(res))
			})
			.catch(e => {
				console.error('actions gud: ', e)
			})
    }
}

export const addPaymentSuccess = data => {
	type: 'add_payment_success',
	data
}


export const addPayment = (essen, flex, lts) => {
  return dispatch => {
  	return fetch('http://localhost:8080/addpayments',
		{
			method: "POST",
			body: JSON.stringify({
				essen,
				flex,
				lts
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


