var options = {
	"key": "YOUR_KEY_ID",
	"amount": "20",
	"name": "Merchant Name",
	"description": "Purchase Description",
	"image": "/your_logo.png",
	"handler": function(response) {
		console.log(response)
	},
	"prefill": {
		"name": "Harshil Mathur",
		"email": "harshil@razorpay.com"
	},
	"notes": {
		"address": "Hello World"
	}
};
var rzp1 = new Razorpay(options);

$("#rzp-button1").click(function(e) {
	rzp1.open();
	e.preventDefault();
});
