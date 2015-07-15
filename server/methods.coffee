Meteor.methods
	razorpayCapture: (txnId, amount) ->
		check txnId, String
		check amount, Number
		apiauth = "https://api.razorpay.com/v1/payments/" + txnId + "/capture";
		result = HTTP.post(apiauth , {params:{amount:amount}, auth:"rzp_test_ACrQrYe4JyQgUe:FDJMpsBxL0JGXgfiaWrqOCjf"})
		return result.data
