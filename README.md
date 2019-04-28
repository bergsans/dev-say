# dev-say

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

By use of console.dir we would instantly see keyA and keyB, but we'd have to click the arrow to see keyC (and so on). Often you want to see the whole object, just like you'll see the whole array. Something you can do with console.table. This project hijakes the console.log and represents objects like this:

```
name: someObject
+keyA: <string> 'Hello, Object!'
+keyB: 
+----+keyC:
+---------+someArr: <array> [1,2,3]
+---------+keyD:
+-------------+someValue: <string> 'Hello, Value!'

```

