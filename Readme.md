# FTG-QrRedemption

This small progressive web app was created for the VRL cafe to facilitate the redemption of the texted token to those who fill out the first time guest form.

While the theme is built on Rock, it's essentially just an HTML PWA that relies on small JS libraries.

## Actions

* Open PWA on device. Current URL is https://rock.vrl.church/ftg-scanner
  
  Note: the URL must be rock.vrl.church to make sure that any other pages opened stay in the PWA context.
* Click the "SCAN NOW" button.
  * A sheet opens with the camera app
* Pass the QR under the camera
* I programmed in a pause because the scan happens so quick that it almost seems like it didn't work. You'll see a "validating..." message.
* The URL that's encoded goes to a page with a workflow form looking for a WorkflowId to be passed in.
* The validation workflow page will give a 👍🏻 or ✋🏻 message.
* After 10 seconds or so the screen will return to the ftg-scanner page.