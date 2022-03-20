import React, { useState } from 'react';
import { IonModal, IonButton, IonContent } from '@ionic/react';
import { IonHeader, IonPage, IonTitle, IonRow,IonImg, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { wifi } from 'ionicons/icons';
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
  return (
    <IonContent>
      <IonModal onDidDismiss={() => {
        setShowModal(false)
      }} isOpen={showModal}>
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
                <IonImg src={modalInfo?.sprites?.front_default} />
                <IonCardTitle>{modalInfo?.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
              <IonCardTitle>Tamaño</IonCardTitle>
                {modalInfo?.height}
              </IonCardContent>
              <IonCardContent>
              <IonCardTitle>Abilidades</IonCardTitle>
                {modalInfo?.abilities?.map((element: any) => {
                  return (
                    <>
                    { element?.ability?.name}
                    </>
                  )
                })}
              </IonCardContent>
            </IonCard>

            <IonCard>
            <IonCardTitle>Tipos</IonCardTitle>
            {modalInfo?.types?.map((element: any) => {
              console.log('element   ', element);
                  return (
                    <IonItem href="#" className="ion-activated">
                <IonIcon icon={wifi} slot="start" />
                <IonLabel>{element?.type?.name}</IonLabel>
              </IonItem>
                  )
                })}

            </IonCard>
          </IonContent>


        </IonPage>
      </IonModal>
      {listItems.map((element: any, index: number) => {
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
    </IonContent>
  );
};

export default ListContainer;
