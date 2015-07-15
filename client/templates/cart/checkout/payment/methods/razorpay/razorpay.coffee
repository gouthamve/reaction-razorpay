Template.razorpayPaymentForm.events
  'click .btn-complete-order': () ->
    options =
      'key': 'rzp_test_ACrQrYe4JyQgUe'
      'amount': ReactionCore.Collections.Cart.findOne().cartTotal()*100
      'name': 'Merchant Name'
      'description': 'Purchase Description'
      'image': '/your_logo.png'
      'handler': (response) ->
        Meteor.call "razorpayCapture", response.razorpay_payment_id, ReactionCore.Collections.Cart.findOne().cartTotal()*100, (err, result) ->
          total = result.amount/100
          normalizedStatus = "settled"
          normalizedMode = "capture"
          paymentMethod =
            processor: "Razorpay"
            amount: total
            status: normalizedStatus
            mode: normalizedMode
            transactionId: result.id
            createdAt: 1436992915
            transactions: result
          CartWorkflow.paymentMethod(paymentMethod)
      'prefill':
        'name': ReactionCore.Collections.Accounts.findOne().profile.addressBook[0].fullName
        'email': ReactionCore.Collections.Accounts.findOne().emails[0].address
        'contact': ReactionCore.Collections.Accounts.findOne().profile.addressBook[0].phone
    rzp1 = new Razorpay(options)
    rzp1.open()
