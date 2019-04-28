# dev-say

This library helps you to debug JavaScript objects. It does not replace
the console.log nor the console.dir, but compliments them by outputting objects
in a more lucid manner.

## Installation

```
npm i dev-say --save-dev
```

## About dev-say

Outputs objects in a lucid maner:

```
const someObject = {
  keyA: 'Hello, Object!',
  keyB: {
		keyC: {
			someArr: [1,2,3],
			keyD: {
				someValue: 'Hello, Value!'
			}
		}
	}
};
```
![screenshot](https://github.com/claes-magnus/dev-say/blob/master/screenshot.png)
