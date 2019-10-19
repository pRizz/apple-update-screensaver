
### Website
You can access the public version of this website here:
[Apple Update Screensaver](https://prizz.github.io/apple-update-screensaver/)

Tap anywhere on the screen to open it in full screen mode. Hit Escape to exit full screen mode.

### Purpose
I created this website as a demonstration of learning Clojure, ClojureScript, Reagent, etc. I decided a fairly simple project would be to mimic Apple's update screen, after staring at it recently for an absurd amount of time. The "update" never actually finishes loading and will reset after the minutes remaining falls under a threshold.

### TODO
- Make it mobile aware so it looks good on mobile browsers.

### Development mode
To start the Figwheel compiler, navigate to the project folder and run the following command in the terminal:

```
lein figwheel
```

Figwheel will automatically push cljs changes to the browser.
Once Figwheel starts up, you should be able to open the `public/index.html` page in the browser.

### REPL

The project is setup to start nREPL on port `7002` once Figwheel starts.
Once you connect to the nREPL, run `(cljs)` to switch to the ClojureScript REPL.

### Building for production

```
lein clean
lein package
```
