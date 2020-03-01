const mailjet = require ('node-mailjet')
	.connect('0366bcc05cdd8755014358d8ede5f406', 'f00571184476159e0afcbcf3689d1107');
const request = mailjet
	.post('send', {'version': 'v3.1'})
	.request({
		'Messages':[
			{
				'From': {
					'Email': 'joaobenetasso@gmail.com',
					'Name': 'Joao Guilherme'
				},
				'To': [
					{
						'Email': 'joaobenetasso@gmail.com',
						'Name': 'Joao Guilherme'
					}
				],
				'Subject': 'Greetings from Mailjet.',
				'TextPart': 'My first Mailjet email',
				'HTMLPart': "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
				'CustomID': 'AppGettingStartedTest'
			}
		]
	});
request
	.then((result) => {
		console.log(result.body);
	})
	.catch((err) => {
		console.log(err.statusCode);
	});