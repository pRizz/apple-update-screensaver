(ns apple-update-screensaver.core
    (:require
      [reagent.core :as r]))

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

(defn home-page []
  [:div {:style
         {:display "flex"
          :position "fixed"
          :height "100%"
          :width "100%"
          :align-items "center"
          :flex-direction "column"
          :justify-content "center"}}
   [:img {:src "assets/Apple_logo_white.svg"
          :style {:width "10%"}}]
   [:div {:style {:margin-top 50
                  :margin-bottom 0}}
    (loadingBarCmp 30)]
   [:div
    {:style
     {:color "white"
      :font-weight "bold"
      :font-size 12
      :margin-top 12}}
    "Installing Software Update: About 42 minutes"]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
