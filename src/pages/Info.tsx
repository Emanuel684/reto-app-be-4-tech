import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ListContainer';
import './Info.css';

const Info: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Info</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
            {/* <IonTitle size="large">Emanuel Acevedo</IonTitle> */}
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name={name} /> */}
        {/* <ExploreContainer /> */}
      </IonContent>
    </IonPage>
  );
};

export default Info;
