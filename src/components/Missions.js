import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((value) => (
          <MissionCard
            key={ value.name }
            name={ value.name }
            year={ value.year }
            country={ value.country }
            destination={ value.destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
