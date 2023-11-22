import React from 'react';
import '../styles/Body.css';

import jsonData from '../data/response.json';
function Corps() {
  return (
    <div>
       <h1>Statistiques des Joueurs</h1>

<table>
    <thead>
        <tr>
              <th>Nom Joueur</th>
              <th>Equipe</th>
              <th>Match</th>
              <th>Points</th>
              <th>Rebond</th>
              <th>Passes</th>
              <th>Minute</th>
              <th>Efficacite</th>
              <th>Tir Reussis</th>
              <th>Tirs Trois Points</th>
              <th>Lancer Francs</th>
        </tr>
    </thead>
    <tbody>
        
    {jsonData.map((joueur, index) => (
            <tr key={index}>
            <td>{joueur.joueur}</td>
            <td>{joueur.equipe}</td>
            <td>{joueur.matchs}</td>
            <td>{joueur.points}</td>
            <td>{joueur.rebond}</td>
            <td>{joueur.passes}</td>
            <td>{joueur.minutes}</td>
            <td>{joueur.efficacite}</td>
            <td>{joueur.tirsreussis}</td>
            <td>{joueur.tirstroispoints}</td>
            <td>{joueur.lancersfrancs}</td>
            </tr>
          ))}
    </tbody>
</table>

    </div>
  );
}

export default Corps;
