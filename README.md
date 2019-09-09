
PCAction
=========
maintained by [PandaClouds.com](https://pandaclouds.com)

`PCAction` is the "Action" library for the Pages SDK Clients.


Installation
------------

1. If you want to use this library, you first need to install the [Node.js](https://nodejs.org/en/).

2. When you install node.js, will also be installed [npm](https://www.npmjs.com/).

3. Please run the following command.

```
npm install --save @panda-clouds/action
```

Usage
-----

### Node.js

```javascript
const PCAction = require('@panda-clouds/action');

// example usage

```

You can replace PCAction with any variable.


Methods
-------

[Unit Tests] are an additional resource for learning functionality.

### - mustExist()

requires the property to be set,
else throws error

Example:

```javascript
Parse.Cloud.beforeSave('Book', request =>{
	let button = PCAction.alertButton('ok');
	return PCAction.showAlert('oops!','We couldn\'t find your account',[]); // =>
	/*
{
  "type": "showAlert",
  "title": "oops!",
  "message": "We couldn't find your account",
  "buttons": [
    {
      "title": "ok",
      "action": {
        "type": "nothing"
      }
    }
  ]
}
	*/
});
```



Contributions
-------------

Pull requests are welcome! here is a checklist to speed things up:

- modify `PCAction.js`
- add unit tests in `PCAction.spec.js`
- run `npm test`
- document method in `README.md`
- add your name to 'Contributors' in `README.md`


### Contributors

(Add your name)

- [*] [Marc Smith](https://github.com/mrmarcsmith)


[Unit Tests]: https://github.com/panda-clouds/string/blob/master/spec/PCAction.spec.js
