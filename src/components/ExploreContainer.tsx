// import './ExploreContainer.css';

// interface ContainerProps {
//   name: string;
// }

// const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
//   return (
//     <div className="container">
//       <strong>{name}</strong>
//       <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
//     </div>
//   );
// };

// export default ExploreContainer;

import React, { useState } from 'react';
import { IonModal, IonButton, IonContent } from '@ionic/react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

export const Tab1: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonContent>
      <IonModal isOpen={showModal}>
        <p>This is the modal content.</p>
        <IonButton onClick={() => setShowModal(false)}>
            Close Modal
        </IonButton>
      </IonModal>
      <IonButton color="primary" size="large" expand="full" shape="round" className="cardButton" onClick={() => setShowModal(true)}>
           <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
        </IonCard>
      </IonButton>
    </IonContent>
  );
};

export default Tab1;
