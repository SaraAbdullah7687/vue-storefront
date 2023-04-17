const middleware = {}

middleware['checkout'] = require('../middleware/checkout.ts')
middleware['checkout'] = middleware['checkout'].default || middleware['checkout']

middleware['is-authenticated'] = require('../middleware/is-authenticated.ts')
middleware['is-authenticated'] = middleware['is-authenticated'].default || middleware['is-authenticated']

middleware['url-resolver'] = require('../middleware/url-resolver.ts')
middleware['url-resolver'] = middleware['url-resolver'].default || middleware['url-resolver']

export default middleware
