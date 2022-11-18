# Vanilla JavaScript Notification for Bootstrap v5
A basic Bootstrap5 vanilla JavaScript Notification object.

## Usage
Import the notification using a standard JavaScript import as shown below. **Additionally**, add the CSS file source into your existing stylesheets or import it as a separate stylesheet reference in your HTML.

```js
import BSNotification from "./path/to/BSNotification.js";
```

An example of displaying one:

```js
const notification = new BSNotification();
notification.setType(BSNotification.TYPES.SUCCESS);
notification.setContent("Module saved successfully.");
notification.setShowTime(1500);
notification.show();
```

## Properties & Methods
Methods and properties of the BSNotification object are documented below

### Static properties
```
BSNotification.TYPES - An object with keys: INFO, ALERT, SUCCESS, ERROR. Used to set the style type of the notification.
BSNotification.notificationContainer - An HTMLDivElement that houses all the notifications.
```

### Properties
```
alertType - The style type of alert
showTime - The millisecond time until the alert disappears after being shown
bsAlert - The Bootstrap Alert object for this notification
dom - The HTMLDivElement this object uses in the DOM when rendered
content - The textual or HTML content to display in the notification's alert box
```

### Methods
```
setType(int notifType) - Sets the style type of the Notification
setContent(string content) - Sets the textual or HTML content for the Notification
setShowTime(int milliseconds) - Sets the millisecond show time to display the Notification
show() - Renders the Notification object
```

## Example
![image](https://user-images.githubusercontent.com/17110935/202767693-2e124fbc-16e0-45ce-97ca-e2c367fa1a00.png)
