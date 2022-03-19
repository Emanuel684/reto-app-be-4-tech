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
import { IonHeader, IonPage, IonTitle, IonRow, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import './ListContainer.css';
import { IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/react';
export const ListContainer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonContent>
      <IonModal isOpen={showModal}>
        {/* <p>This is the modal content.</p> */}
        <IonPage>
          <IonHeader>
            <IonToolbar className='toolBar'>
              <IonRow>
                <IonTitle>CardExamples</IonTitle>
                <IonButton onClick={() => setShowModal(false)}>
                  Close Modal
                </IonButton>
              </IonRow>
            </IonToolbar>
          </IonHeader>
          <IonContent>
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

            <IonCard>
              <IonItem>
                <IonIcon icon={pin} slot="start" />
                <IonLabel>ion-item in a card, icon left, button right</IonLabel>
                <IonButton fill="outline" slot="end">View</IonButton>
              </IonItem>

              <IonCardContent>
                This is content, without any paragraph or header tags,
                within an ion-cardContent element.
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonItem href="#" className="ion-activated">
                <IonIcon icon={wifi} slot="start" />
                <IonLabel>Card Link Item 1 activated</IonLabel>
              </IonItem>

              <IonItem href="#">
                <IonIcon icon={wine} slot="start" />
                <IonLabel>Card Link Item 2</IonLabel>
              </IonItem>

              <IonItem className="ion-activated">
                <IonIcon icon={warning} slot="start" />
                <IonLabel>Card Button Item 1 activated</IonLabel>
              </IonItem>

              <IonItem>
                <IonIcon icon={walk} slot="start" />
                <IonLabel>Card Button Item 2</IonLabel>
              </IonItem>
            </IonCard>
          </IonContent>


        </IonPage>
        {/* <p>This is the modal content.</p> */}

        {/* <IonButton onClick={() => setShowModal(false)}>
            Close Modal
        </IonButton> */}
      </IonModal>
      {/* <IonButton color="primary" size="large" expand="full" shape="round" className="cardButton" onClick={() => setShowModal(true)}> */}
      <IonItemSliding>
        <IonItem onClick={() => setShowModal(true)}>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => setShowModal(true)}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      {/* </IonButton> */}
    </IonContent>
  );
};

export default ListContainer;
