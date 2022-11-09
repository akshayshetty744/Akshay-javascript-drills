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

* ###  The main 2 components of the browser engine which are responsible for the rendering of the web page are:-
  1) Browser Engine
  2) Rendering Engine
 
 * Browser Engine : Browser engines are also referred to as the javascript engine of the web browser, different web browsers use different javascript engines like google’s javascript engine name is V8 similarly Firefox has spider monkey, Safari has nitro and edge has Chakra. The key objective of the browser engine is to marshall's actions between the UI interface and the rendering engine.
 
 * Rendering Engine : The work of the rendering engine starts once the user has requested a particular web page. The rendering engine starts receiving the Html, CSS and js files of the requested web page, through the networking layer. After receiving the content of the requested page
 
## How browser is work 

   ![1_aDQUwsijfEQa6vkhY91N3w](https://user-images.githubusercontent.com/84218281/200830324-5989341b-1cdd-4b29-b568-a92f0609a09a.png)
## How the Browser Renders HTML?
  A web browser is a piece of software that downloads files from a remote server and displays them to you, allowing user interaction. The process of compiling the     files downloaded from a remote server and showing them to the user is done by browser engines.
  
## Javascript engines :
* A javascript engine (sometimes also called an ECMAScript engine) is a piece of software that executes (runs) Javascript code in the browser, and not only (the V8 engine is a core component of the Node.js environment, for example).
*  V8 : V8 is Google’s high-performance JavaScript engine. It is written in C++ and it's used in Chrome and in Node.js, among others. It implements ECMAScript (a JavaScript standard meant to ensure the interoperability of web pages across different web browsers) and WebAssembley. It implements ​ECMA-262.

## References Section
* https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work#:~:text=to%20screen%20readers.-,Render,then%20painted%20to%20the%20screen.
* https://developer.chrome.com/articles/renderingng/
* https://blog.logrocket.com/how-browser-rendering-works-behind-scenes/
