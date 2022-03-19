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
import axios from 'axios';

export const ListContainer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [listItems, setListItems] = useState<any>([]);
  const [currentSelection, setCurrentSelection] = useState<any>({
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/"
  });
  const [modalInfo, setModalInfo] = useState<any>([]);

  const sendRequest = () => {
    return axios
      .get('https://pokeapi.co/api/v2/pokemon', {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        return response.data;
      })
  };

  const sendRequestPokemons = (url: any) => {
    return axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        return response.data;
      })
  };

  // React.useEffect(() => {
  //   sendRequest().then(async (data) => await data?.results.map(async (element: any) => await sendRequestPokemons(element?.url).then((data: any) => setListItems([...listItems,data]))));
  // }, []);
  React.useEffect(() => {
    sendRequest().then((data) => {
      setListItems(data.results)
    });
  }, []);
  React.useEffect(() => {
    sendRequestPokemons(currentSelection.url).then((data) => {
      console.log('data  currentSelection',data);
      setModalInfo(data);
    });
  }, [currentSelection]);
  console.log('currentSelection  ', currentSelection);
  return (
    <IonContent>
      <IonModal isOpen={showModal}>
        {/* <p>This is the modal content.</p> */}
        <IonPage>
          <IonHeader>
            <IonToolbar className='toolBar'>
              <IonRow>
                <IonTitle>{modalInfo?.name}</IonTitle>
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
      {listItems.map((element: any, index: number) => {
        // console.log('index', index);
        return (
          <IonItemSliding key={index}>
            <IonItem onClick={() => { setShowModal(true); setCurrentSelection(element); }}>
              <IonLabel>{element.name}</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => setShowModal(true)}>Unread</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        );
      })}
      {/* <IonItemSliding>
        <IonItem onClick={() => setShowModal(true)}>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => setShowModal(true)}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding> */}
      {/* </IonButton> */}
    </IonContent>
  );
};

export default ListContainer;
