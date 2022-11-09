#  Broser Rendering
 * Every browser has its own unique rendering engine. Rendering engines might also differ for different browser versions. The list below mentions browser engines used by a few common browsers:
  1) Google Chrome and Opera v.15+: Blink
  2) Internet Explorer: Trident
  3) Mozilla Firefox: Gecko
  4) Chrome for iOS and Safari: WebKit
  


## The browser's high level structure
 
 1) The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
   The browser engine: marshals actions between the UI and the rendering engine.

 2) The rendering engine: responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
  Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

 3) UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
  JavaScript interpreter. Used to parse and execute JavaScript code.

 4) Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.
