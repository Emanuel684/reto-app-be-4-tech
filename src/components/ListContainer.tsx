import React, { useState } from 'react';
import { IonModal, IonButton, IonContent } from '@ionic/react';
import { IonHeader, IonPage, IonTitle, IonRow, IonImg, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonThumbnail } from '@ionic/react';
import { ribbonOutline, waterOutline } from 'ionicons/icons';
import './ListContainer.css';
import { IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/react';
import axios from 'axios';

export const ListContainer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [paginationUrlNext, setPaginationUrlNext] = useState('');
  const [paginationUrlPrevious, setPaginationUrlPrevious] = useState('');
  const [paginationUrlInitial, setPaginationUrlInitial] = useState('https://pokeapi.co/api/v2/pokemon');
  const [numPage, setNumPage] = useState(1);
  const [listItems, setListItems] = useState<any>([]);
  const [currentSelection, setCurrentSelection] = useState<any>({
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/"
  });
  const [modalInfo, setModalInfo] = useState<any>([]);

  const sendRequest = async () => {
    const response = await axios
      .get(paginationUrlInitial, {
        headers: {
          'Content-Type': 'application/json'
        },
      });
    setPaginationUrlNext(response.data.next);
    setPaginationUrlPrevious(response.data.previous);
    return response.data;
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationUrlInitial]);
  React.useEffect(() => {
    sendRequestPokemons(currentSelection.url).then((data) => {
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
                <IonTitle>{modalInfo?.name?.charAt(0)?.toUpperCase() + modalInfo?.name?.slice(1)}</IonTitle>
                <IonButton color="danger" onClick={() => setShowModal(false)}>
                  X
                </IonButton>
              </IonRow>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonCard>
              <IonCardHeader className="ion-align-self-center">
                <div className='imagePokemon'>
                  <IonThumbnail>
                    <IonImg className='imagePokemon' src={modalInfo?.sprites?.front_default} alt="" />
                  </IonThumbnail>
                </div>
                <IonCardTitle>{modalInfo?.name?.charAt(0)?.toUpperCase() + modalInfo?.name?.slice(1)}</IonCardTitle>
              </IonCardHeader>
              <IonRow>
                <IonCardContent>
                  <IonCardTitle>Tamaño</IonCardTitle>
                  {modalInfo?.height}
                </IonCardContent>
                <IonCardContent>
                  <IonCardTitle>Experiencia base</IonCardTitle>
                  {modalInfo?.base_experience}
                </IonCardContent>
                <IonCardContent>
                  <IonCardTitle>Habilidades</IonCardTitle>
                  {modalInfo?.abilities?.map((element: any, index: number) => {
                    return (
                      <IonLabel key={index}>
                        {`    ${element?.ability?.name}`}
                      </IonLabel>
                    )
                  })}
                </IonCardContent>
              </IonRow>
            </IonCard>

            <IonCard>
              <IonCardTitle>Tipos</IonCardTitle>
              {modalInfo?.types?.map((element: any, index: number) => {
                return (
                  <IonItem key={index} href="#" className="ion-activated">
                    <IonIcon icon={ribbonOutline} slot="start" />
                    <IonLabel>{element?.type?.name}</IonLabel>
                  </IonItem>
                )
              })}

            </IonCard>

            <IonCard>
              <IonCardTitle>Estadísticas</IonCardTitle>
              {modalInfo?.stats?.map((element: any, index: number) => {
                return (
                  <IonItem key={index} href="#" className="ion-activated">
                    <IonIcon icon={waterOutline} slot="start" />
                    <IonLabel>{element?.stat?.name}</IonLabel>
                    <IonLabel>{element?.base_stat}</IonLabel>
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
              <IonLabel>{element?.name?.charAt(0)?.toUpperCase() + element?.name?.slice(1)}</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => setShowModal(true)}>Unread</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        );
      })}
      <IonToolbar className='toolBar'>
        <IonRow className="ion-align-self-center">
          <IonButton disabled={numPage === 1 ? true : false} color="secondary" onClick={() => {
            setNumPage(numPage - 1);
            setPaginationUrlInitial(paginationUrlPrevious);
          }}>
            Anterior
          </IonButton>
          <IonLabel className="ion-label">{numPage}</IonLabel>
          <IonButton disabled={ paginationUrlNext == null ? true : false} color="secondary" onClick={() => {
            setNumPage(numPage + 1);
            setPaginationUrlInitial(paginationUrlNext);
          }}>
            Siguiente
          </IonButton>
        </IonRow>
      </IonToolbar>
    </IonContent>
  );
};

export default ListContainer;
