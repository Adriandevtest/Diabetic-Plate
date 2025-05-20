import React from 'react'
import {IonReactRouter} from "@ionic/react-router";
import {IonTabs,IonTabBar, IonTabButton, IonIcon , IonRouterOutlet} from "@ionic/react";
import {Route, Redirect} from "react-router-dom";
import {Home,Medicina,Settings} from "../../../screens";
import {settingsOutline, homeOutline, medkitOutline, hammerOutline} from "ionicons/icons";
import "./AppNavigation.scss";
import { Soporte } from '../../../screens/Soporte';

export function AppNavigation() {
  return (
    <IonReactRouter>
      <IonTabs className="navigation">
        <IonRouterOutlet>
          <Route exact path="/home" component={Home} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/medicina" component={Medicina} />
          <Route exact path="/soporte" component={Soporte} />
          <Route exact path="/">
            <Redirect to="/" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className="tab-bar">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
          </IonTabButton>
          <IonTabButton tab="Medicina" href="/medicina">
            <IonIcon icon={medkitOutline} />
          </IonTabButton>
          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={settingsOutline} />
          </IonTabButton>
          <IonTabButton tab="soporte" href="/soporte">
            <IonIcon icon={hammerOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}
