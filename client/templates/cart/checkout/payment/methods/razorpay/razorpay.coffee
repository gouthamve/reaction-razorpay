Template.razorpayPaymentForm.events
  'click .btn-complete-order': () ->
    options =
      'key': 'rzp_test_ACrQrYe4JyQgUe'
      'amount': '20000'
      'name': 'Merchant Name'
      'description': 'Purchase Description'
      'image': '/your_logo.png'
      'handler': (response) ->
        alert response.razorpay_payment_id
        return
      'prefill':
        'name': 'Harshil Mathur'
        'email': 'harshil@razorpay.com'
      'notes': 'address': 'Hello World'
    rzp1 = new Razorpay(options)
    rzp1.open()
