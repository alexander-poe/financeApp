const _getUserData = 'http://localhost:8080/userfinance'
const _addPayment = 'http://localhost:8080/addpayment'

export const getUserSuccess = data => ({
	type: 'get_user_success',
	data
})

export const getUserData = data => dispatch => {
	return fetch(_getUserData)
		.then(res => {
			dispatch(getUserSuccess(res.data))
		}).catch(e => {
			console.error('actions gud: ', e)
		})
}

export const addPayment = (essen, flex, lts) => {
	return fetch(_addPayment,
		{
			method: "POST",
			body: JSON.stringify({
				essen,
				flex,
				lts
			}),
			headers: {"Content-Type" : "application/json"}
		}).then(res => {
			if (res.status >= 300) throw new Error(res.statusText)
			return res;
		}).then(res => {
			console.log('post success')
		}).catch(e => {
			console.error('actions ap: ', e)
		})		
}

