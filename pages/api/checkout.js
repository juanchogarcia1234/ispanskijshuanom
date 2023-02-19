// This is your test secret API key.
const stripe = require('stripe')(
	'sk_test_51KVsbzLfiTviQnVLdclzOAbygIypECRIVRlZksWIWf6NWyyuFcLrd7rJXdnaXYVtVicCLhk2Zmysjr5VfXWnEApY00JmFs1Cnz'
)

const YOUR_DOMAIN = 'http://localhost:3000'

export default async function handler(req, res) {
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				// Provide the exact Price ID (for example, pr_1234) of the product you want to sell
				price: 'price_1McrVULfiTviQnVLNP68DdwB',
				quantity: 1,
			},
		],
		mode: 'payment',
		success_url: `${YOUR_DOMAIN}/success/?success=true`,
		cancel_url: `${YOUR_DOMAIN}?canceled=true`,
	})

	res.redirect(303, session.url)
}
