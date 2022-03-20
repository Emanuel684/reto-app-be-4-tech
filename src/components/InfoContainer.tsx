import React from 'react';
import { IonButton, IonContent } from '@ionic/react';
import './ListContainer.css';

export const ListContainer: React.FC = () => {
    return (
        <IonContent>
            <div className="card">
                <div className="header">
                    <div className="avatar">
                        <img src="https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/275786510_3372055203082044_6392780706255812486_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=-MUE863lFJIAX8WmAB4&tn=c_rlRlXBFWj0jFTE&_nc_ht=scontent.feoh3-1.fna&oh=00_AT_kyZLtMoPWRLjvQP-2ilxKy9KR1HxxV4A8GTyvjCTHBA&oe=623BAA02" alt="" />
                    </div>
                </div>
            </div>

            <div className="card-body">
                <div className="user-meta ion-text-center">
                    <h3 className="playername">Emanuel Acevedo</h3>
                    <h5 className="country">Muñoz</h5>
                </div>
                <IonButton expand="full" color="primary">http://rogerfederer.com</IonButton>
                <IonButton expand="full" color="secondary">@RogerFederer on Twitter</IonButton>
                <IonButton expand="full" color="secondary">View profile at ATP</IonButton>
            </div>
        </IonContent>
    );
};

export default ListContainer;
