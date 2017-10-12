Taisty - a Taiwanese restaurants finder hybrid app

√ Create a new projects with ionic framwork
  - Different file structure
  - Using some typescript (.ts) in addition to javascript
  - Ionic can automatically generate perfectly sized icons and splash screens from source images for your Cordova platforms
  
  $ ionic cordova resources [<platform>]
  
√ Google maps JavaScript API
√ cordova-plugin-geolocation
√ Create a restaurant list.json with their name, phone number, address, latitute and longtitude
√ Upload .json to firebase, import into script ,and retrieve the data from firebase

√ When testing the app for the first few run, a firebase connection error kept occuring.
  ‘cannot find name “firebase”’
  --> Beside pasting the initializing snippet to script, I have to install firebase SDK

  $ npm install --save firebase
  https://javebratt.com/ionic-firebase-setup/

  --> Also move the initializing snippet to src/app/app.component.ts instead of putting in index.html or pages/about/about.ts
      (the page where I’d like to call firebase)
      
√ In order to make image show both on browser and mobile devices
  
  <img src=”./assets/img/food.jpg” >
  
  instead of (image only showing when testing on browser)
  
  <img src=”../assets/img/food.jpg” >
  
  or (image only showing when testing on mobile devices)
  
  <img src=”/assets/img/food.jpg” >

√ Splash and icon
  The source image for icons should ideally be at least 1024×1024px and located at resources/icon.png. The source image for splash screens
  should ideally be at least 2732×2732px and located at resources/splash.png
  https://ionicframework.com/docs/cli/cordova/resources/
 
