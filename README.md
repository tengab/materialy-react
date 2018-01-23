# React

Check out slides folder for presentations & instructions.

# Firebase

Check out commits hostory to see tasks example solutions.

# Getting started

https://firebase.google.com/

https://firebase.google.com/docs/web/setup

https://www.youtube.com/watch?v=O17OWyx08Cg

https://www.youtube.com/watch?v=mwNATxfUsgI
https://www.youtube.com/watch?v=p4XTMvagQ2Q

https://www.youtube.com/channel/UCP4bf6IHJJQehibu6ai__cg

# Firebase CLI

https://firebase.google.com/docs/cli/

Install Node.js on your machine, then install firebase-tools.

```javascript
npm install -g firebase-tools
npm login
``` 

# Initializing a project directory

```javascript
firebase init
```

The firebase init command does not create a new directory. If you're starting a new project from scratch, you should first make a directory and change directories into it before running the init command.

# Firebase Hosting

https://www.youtube.com/watch?v=meofoNuK3vo

https://firebase.google.com/docs/hosting/

- Free hosting with limited transfer
- Free to conect own domain
- Free and auto SSL certificate
- Deploy from CLI
- Roll-back option from console

### Testing project locally

```javascript
firebase serve
```

### Deploying project

```javascript
firebase deploy
```

We can customize hosting behaviour in firebase.json. For details look into: https://firebase.google.com/docs/hosting/url-redirects-rewrites

# Firebase Realtime Database

https://www.youtube.com/watch?v=dBscwaqNPuk
https://www.youtube.com/watch?v=noB98K6A0TY

### Firebase Realtime Database Rules

Access to database can be modyfying by Database Rules.

You can check examples here:
https://firebase.google.com/docs/database/security/quickstart#sample-rules

### Getting started

We need Firebase library to get all Firebase possibilities like real time database.

https://firebase.google.com/docs/database/web/start

In simple website we can use CDN:

```javascript
<script src="https://www.gstatic.com/firebasejs/4.5.0/firebase.js"></script>
```

In React app we can install it from npm:

```javascript
npm install --save firebase
```

To get started with Firebase you must connect firebase app to your project:

```javascript
// Set the configuration for your app
var config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);
```

Best way is to put it in separate file in ours /src fodlder:

```javascript
import firebase from 'firebase'

var config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com"
};

let firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
```

As Firebase offers us many different services we must firstly choose what service we want to use.

If we want to use realtime database we can call:

```javascript
var db = firebase.database();
```

### How to store data in Realitme Database 

1. Data in Realitme Database is a JSON tree
2. It  allows nesting data up to 32 levels deep but nesting isn't recommended. When you fetch data at a location in your database, you also retrieve ALL of its child nodes.
3. Flat data structures (denormalization). If the data is split into parts it can be efficiently downloaded in separate calls, as it is needed. 

Check out more here: https://firebase.google.com/docs/database/web/structure-data

### Getting the path to write

We can reference any path in our database (even that doesn't exists) by calling ref on database reference.

```javascript
var dbRef = firebase.database().ref();

var dbRef = firebase.database().ref('my/firts/path');
```

### Simply writing the data

For basic write operations, you can use set() to save data to a specified reference, replacing any existing data at that path. For example:

```javascript
firebase.database().ref(cats/).set(“Fluffy”);

firebase.database().ref(cats/).set({name: “Fluffy”});
```

When we want to update som fileds rather than replacing data there we can call update on database reference. More can be found here: https://firebase.google.com/docs/database/web/read-and-write#updating_or_deleting_data

### Deleting data

https://firebase.google.com/docs/database/web/read-and-write#updating_or_deleting_data

The simplest way to delete data is to call remove() on a reference to the location of that data.

You can also delete by specifying null as the value for another write operation such as set().

### Simply reading the data

https://firebase.google.com/docs/database/admin/retrieve-data

In Firebase we can fetch data once or subscribe to database changes and get notifications on one of these events:

* child_added
* child_changed
* child_removed
* value

In some cases you may want a snapshot of your data without listening for changes, such as when initializing a UI element that you don't expect to change. You can use the once() method to simplify this scenario: it triggers once and then does not trigger again.

```javascript
var dbRef = firebase.database().ref();
dbRef.once('value', function(snapshot) {
  let value = snapshot.val();
});
```

In other cases we want to be informed when something happens in database. We can call on() instead of once()

```javascript
var dbRef = firebase.database().ref();
dbRef.on('value', function(snapshot) {
  let value = snapshot.val();
});
```
### Saving lists (arrays)

https://firebase.google.com/docs/database/web/lists-of-data 

When we want to add another child to a location in our database we can call push() method on that reference.

```javascript
var dbRef = firebase.database().ref();

// Create a new post reference with an auto-generated id
var newRef = dbRef.push();
newPostRef.set({...});

// this line do the same as line above
dbRef.push({...});
```

### Sorting and filtering data

https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data

We can build simple queries to obtain data sorted by key, by value, or by value of a child.

You can also filter the sorted result to a specific number of results or a range of keys or values.

#### Sort

* orderByChild() -	Order results by the value of a specified child key
* orderByKey() - Order results by child keys
* orderByValue() - Order results by child values

Most useful is orderByChild() method. We can sort list of user objects by age, for example.

How the data is ordered - https://firebase.google.com/docs/database/web/lists-of-data#data-order

#### Filter

* limitToFirst() - Sets the maximum number of items to return from the beginning of the ordered list of results.
* limitToLast()	- Sets the maximum number of items to return from the end of the ordered list of results.
* startAt()	- Return items greater than or equal to the specified key or value, depending on the order-by method chosen.
* endAt() - Return items less than or equal to the specified key or value, depending on the order-by method chosen.
* equalTo() - Return items equal to the specified key or value, depending on the order-by method chosen.

# Firebase Authentication

https://www.youtube.com/watch?v=-OKrloDzGpU

JWT is an concept widley used in web development to authenticaticate users. Checkout more here: https://jwt.io/ . 

https://firebase.google.com/docs/auth/web/start

Authentication step by step: 
1. Set up sign-in methods
2. Implement UI flows for your sign-in methods	
3. Pass the user's credentials to the Firebase Authentication SDK	

### Auth service:

```javascript
var auth = firebase.auth();
```

### Creating users:

```javascript
firebase.auth()
    .createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });
```

### Signing users in:

```javascript
firebase.auth()
    .signInWithEmailAndPassword(email, password)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });
```
### Signing users out:

```javascript
firebase.auth()
    .signOut()
        .then(function() {
            // Sign-out successful.
        }, function(error) {
            // An error happened.
        });
```

### Checking auth state:

```javascript
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
	// User is NOT signed in.
  }
});
```

### 3-rd party auth

Google https://firebase.google.com/docs/auth/web/google-signin

First we must choose provider:

```javascript
var provider = new firebase.auth.GoogleAuthProvider();
```

Code below is identical to all providers! Configuration differs!

```javascript
firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        // This gives you a result
        console.log(result);
    }).catch(function(error) {
        // Handle Errors here.
    });
```

We can access current user from every place we can access firebase object by calling:

```javascript
var user = firebase.auth().currentUser;
```

You can update a user's basic profile information —the user's display name and profile photo URL—with the updateProfile() method. For example:

```javascript
var user = firebase.auth().currentUser;
user.updateProfile({
  displayName: "Jane Q. User",
  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
```

https://firebase.google.com/docs/auth/web/manage-users

# Storage

https://www.youtube.com/watch?v=SpxHVrpfGgU

Cloud Storage for Firebase lets you upload and share user generated content, such as images and video, which allows you to build rich media content into your apps. Your data is stored in a Google Cloud Storage bucket.

https://firebase.google.com/docs/storage/web/start

### Storage rules

https://firebase.google.com/docs/storage/security/start#sample-rules

```javascript
// Anyone can read or write to the bucket,
   even non-users of your app.

service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write;
    }
  }
}
```

If we want to use storage service we can call:

```javascript
var storage = firebase.storage();
```
We can create references to certain paths in storage the same way as in database:

```javascript
var storageRef = storage.ref();
```

### Downloading files

https://firebase.google.com/docs/storage/web/download-files

```javascript
storageRef.child('images/stars.jpg')
    .getDownloadURL()
    .then(function(url) {
        // `url` is the download URL for
        // 'images/stars.jpg'
        // here we can set this URL
        // as img src attribute (if it is an image)     
    });
```

### Simple uploading file

```javascript
var file = ... // use the file from eg. file input

ref.put(file).then(function(snapshot) {
  console.log('Uploaded a blob or file!');
});
```

### Uploading files with progress monitoring

```javascript
uploadTask.on('state_changed', function(snapshot){
var progress =
(snapshot.bytesTransferred / 
snapshot.totalBytes) * 100;

  	console.log('Upload is ' + progress + '% done');
}, function(error) {
	console.log(‘error’);
}, function() {
var downloadURL = 
uploadTask.snapshot.downloadURL;
});
```

### COSR in Google storage

If we want to use data from storage we can stuck in to CORS problem. We can set CORS by command line program called gsutil - https://cloud.google.com/storage/docs/gsutil_install

How to set CORS in storage we can check in this thrad on StackOverflow - https://stackoverflow.com/questions/37760695/firebase-storage-and-access-control-allow-origin