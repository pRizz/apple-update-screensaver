(ns ^:figwheel-no-load apple-update-screensaver.dev
  (:require
    [apple-update-screensaver.core :as core]
    [devtools.core :as devtools]))

(extend-protocol IPrintWithWriter
  js/Symbol
  (-pr-writer [sym writer _]
    (-write writer (str "\"" (.toString sym) "\""))))

(enable-console-print!)

(devtools/install!)

(core/init!)
