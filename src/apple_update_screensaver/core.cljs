(ns apple-update-screensaver.core
    (:require
      [reagent.core :as r]))

;; -------------------------
;; Views

(defn home-page []
  [:div {:style
         {:display "flex"
          :position "fixed"
          :height "100%"
          :width "100%"
          :align-items "center"
          :justify-content "center"}}
;   [:div {:style {:color "red"}}
;    "testing"]
   [:img {:src "assets/Apple_logo_white.svg"
          :style
          {:width "10%"}}]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
