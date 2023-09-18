import {
    IonButton,
    IonButtons, IonCheckbox,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel, IonModal,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {useEffect, useRef, useState} from "react";

const Tab1: React.FC = () => {

    const modal = useRef<HTMLIonModalElement>(null);
    const page = useRef(undefined);

    const [canDismiss, setCanDismiss] = useState(false);
    const [presentingElement, setPresentingElement] = useState<HTMLElement | undefined>(undefined);

    useEffect(() => {
        setPresentingElement(page.current);
    }, []);

    function dismiss() {
        modal.current?.dismiss();
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonButton id="open-modal" expand="block">
              Open
          </IonButton>
          <IonModal ref={modal} trigger="open-modal" canDismiss={canDismiss}>
              <IonHeader>
                  <IonToolbar>
                      <IonTitle>Modal</IonTitle>
                      <IonButtons slot="end">
                          <IonButton onClick={() => dismiss()}>Close</IonButton>
                      </IonButtons>
                  </IonToolbar>
              </IonHeader>
              <IonContent>
                  <p className="ion-padding-horizontal">You must accept the terms and conditions to close this modal.</p>
                  <IonItem>
                      <IonLabel className="ion-text-wrap" {...{ for: 'terms' }}>
                          Do you accept the terms and conditions?
                      </IonLabel>
                      <IonCheckbox
                          id="terms"
                          checked={canDismiss}
                          onIonChange={(ev) => {
                              setCanDismiss(ev.detail.checked);
                          }}
                      ></IonCheckbox>
                  </IonItem>
              </IonContent>
          </IonModal>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
