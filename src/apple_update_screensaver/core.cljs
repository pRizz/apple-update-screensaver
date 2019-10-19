(ns apple-update-screensaver.core
    (:require
      [reagent.core :as r]
      [goog.string :as gstring]
      [goog.string.format]))

;; -------------------------
;; Views

(def loadingBarPath
  [:path {:d "M 0 0 h 100 c 2 0 2 2 0 2 h -100 c -2 0 -2 -2 0 -2 Z"}])

(defn loadingBarCmp [percentFilled]
  [:svg {:viewBox "0 0 140 10"
         :width 400
         :height 20}
   [:clipPath {:id "loadingBarClipPath"} loadingBarPath]
   [:path {:id "loadingBarPath"
           :d "M 0 0 h 100 c 2 0 2 2 0 2 h -100 c -2 0 -2 -2 0 -2 Z"}]
   [:circle {:cx "0" :cy "50" :r "1000" :id "mycircle"}]
   [:g {:id "loadingBarContent"
        :transform "translate(20, 0)"
        :clip-path "url(#loadingBarClipPath)"}
    [:use {:href "#loadingBarPath"
           :fill "gray"}]
    [:rect {:id "filledLoadingBar"
            :fill "white"
            :x (+ -210 (* percentFilled 0.01 120))
            :y 0
            :width 200
            :height 20}]]])

(def max-minutes-remaining 59)

(def minutes-remaining-atm (r/atom 45))

(defn percent-finished []
  (* 100 (/ (- max-minutes-remaining @minutes-remaining-atm) max-minutes-remaining)))

(defn home-page []
  [:div {:style
         {:display "flex"
          :position "fixed"
          :height "100%"
          :width "100%"
          :align-items "center"
          :flex-direction "column"
          :justify-content "center"}
         :onClick (fn []
                    (js/console.log "test peter")
                    (.requestFullscreen (.getElementById js/document "app")))}
   [:img {:src "assets/Apple_logo_white.svg"
          :style {:width "7%"}}]
   [:div {:style {:margin-top 50
                  :margin-bottom 0}}
    (loadingBarCmp (percent-finished))]
   [:div
    {:style
     {:color "white"
      :font-weight "bold"
      :font-size 12
      :margin-top 12}}
    (gstring/format "Installing Software Update: About %f minutes" (max 2 (Math/floor @minutes-remaining-atm)))]])

(def updates-per-second 3.0)
(def updates-per-ms (/ updates-per-second 1000.0))

(defn interpolate-loading [from-minutes-remaining to-minutes-remaining duration-ms]
  (let [steps (Math/floor (* updates-per-ms duration-ms))
        minutes-remaining-delta (- to-minutes-remaining from-minutes-remaining)
        minutes-remaining-delta-per-step (/ minutes-remaining-delta steps)
        minutes-remaining-range (range
                                 from-minutes-remaining
                                 to-minutes-remaining
                                 minutes-remaining-delta-per-step)
        duration-step-size (/ duration-ms steps)
        timeout-range (range 0 duration-ms duration-step-size)]
    (doall (for [step (range steps)]
             (js/setTimeout (fn [] (reset! minutes-remaining-atm (nth minutes-remaining-range step)))
                            (nth timeout-range step))))))

;; -------------------------
;; Initialize app

(defn small-interpolation []
  (prn "doing small-interpolation")
  (interpolate-loading
   @minutes-remaining-atm
   (- @minutes-remaining-atm (rand 4))
   5000))

(defn big-interpolation []
  (prn "doing big-interpolation")
  (interpolate-loading
   @minutes-remaining-atm
   (- @minutes-remaining-atm (rand 30))
   5000))

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app"))
  (js/setInterval (fn []
                    (if (< @minutes-remaining-atm 3)
                      (reset! minutes-remaining-atm 55)
                      (if (< (rand) 0.1)
                        (big-interpolation)
                        (small-interpolation))))
                  15000)
  (js/setTimeout (fn []
                   (small-interpolation))))

(defn init! []
  (mount-root))
