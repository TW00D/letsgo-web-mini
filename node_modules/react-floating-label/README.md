# react-floating-label
> Floating label input.

Checkout the [DEMO](http://code-kotis.github.io/react-floating-label/)

__Install it:__

```sh
npm install --save react-floating-label
```

__Usage:__

```js
var FloatingLabel = require('react-floating-label');

<FloatingLabel
	errorMsg='Full name can contain only the alphabets and space'
	pattern={/^[a-z\s]+$/i}/>

```

__Props:__


```js
autoComplete: PropTypes.bool,
errorMsg: PropTypes.string,
placeholder: PropTypes.string.isRequired,
pattern: PropTypes.any,
type: PropTypes.string.isRequired,
id: PropTypes.string.isRequired,
isDisabled: PropTypes.bool
```

__Building and running:__

```
Lifecycle scripts included in react-floating-label:
  start
    ecstatic -p 8000 public

available via `npm run-script`:
  build-js
    NODE_ENV=production browserify main.js | uglifyjs -cm > public/bundle.js
  build-css
    cat master.css > public/bundle.css
  build
    npm run build-js && npm run build-css
  watch-js
    watchify main.js -o public/bundle.js -dv
  watch-css
    catw master.css -o public/bundle.css -v
  watch
    npm run watch-js & npm run watch-css
  ```
  
__License:__

MIT

