(ns apple-update-screensaver.prod
  (:require
    [apple-update-screensaver.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
