// // This is your test secret API key.
// const stripe = require('stripe')(
// 	'sk_test_51KVsbzLfiTviQnVLdclzOAbygIypECRIVRlZksWIWf6NWyyuFcLrd7rJXdnaXYVtVicCLhk2Zmysjr5VfXWnEApY00JmFs1Cnz'
// )

// const endpointSecret = 'whsec_dc462a60f006ccae62c3e175a232ea52cafc75626acf93a12e6882165c44fb7b'
// export default async function handler(req, res) {
// 	const sig = req.headers['stripe-signature']

// 	let event

// 	try {
// 		event = stripe.webhooks.constructEvent(JSON.stringify(req.body), sig, endpointSecret)
// 	} catch (err) {
// 		res.status(400).send(`Webhook Error: ${err.message}`)
// 		return
// 	}

// 	// Handle the event
// 	switch (event.type) {
// 		case 'payment_intent.succeeded':
// 			const paymentIntentSucceeded = event.data.object
// 			// Then define and call a function to handle the event payment_intent.succeeded
// 			break
// 		// ... handle other event types
// 		case 'checkout.session.completed':
// 			console.log('completado')
// 			break
// 		default:
// 			console.log(`Unhandled event type ${event.type}`)
// 	}

// 	// Return a 200 response to acknowledge receipt of the event
// 	res.status(200)
// }

import Stripe from 'stripe'

const handler = async (req, res) => {
	const stripe = new Stripe('whsec_dc462a60f006ccae62c3e175a232ea52cafc75626acf93a12e6882165c44fb7b')

	const webhookSecret = 'whsec_dc462a60f006ccae62c3e175a232ea52cafc75626acf93a12e6882165c44fb7b'

	if (req.method === 'POST') {
		const sig = req.headers['stripe-signature']

		let event

		try {
			const body = await buffer(req)
			event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
		} catch (err) {
			// On error, log and return the error message
			console.log(`❌ Error message: ${err.message}`)
			res.status(400).send(`Webhook Error: ${err.message}`)
			return
		}

		// Successfully constructed event
		console.log('✅ Success:', event.id)

		// Cast event data to Stripe object
		if (event.type === 'payment_intent.succeeded') {
			const stripeObject = event.data.object
			console.log(`💰 PaymentIntent status: ${stripeObject.status}`)
		} else if (event.type === 'charge.succeeded') {
			const charge = event.data.object
			console.log(`💵 Charge id: ${charge.id}`)
		} else {
			console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`)
		}

		// Return a response to acknowledge receipt of the event
		res.json({ received: true })
		// res.redirect(303, '/success')
	} else {
		res.setHeader('Allow', 'POST')
		res.status(405).end('Method Not Allowed')
	}
}

export const config = {
	api: {
		bodyParser: false,
	},
}

const buffer = (req) => {
	return new Promise((resolve, reject) => {
		const chunks = []

		req.on('data', (chunk) => {
			chunks.push(chunk)
		})

		req.on('end', () => {
			resolve(Buffer.concat(chunks))
		})

		req.on('error', reject)
	})
}

export default handler
