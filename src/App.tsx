import React, { ReactNode } from 'react';
import './App.css';
import { LOCATION_CARDS } from './location-cards';
import { LocationCard } from './LocationCard';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardGrid>
        {LOCATION_CARDS.filter((l) => ['201', '501', '604'].includes(l.id)).map((definition, i) => (
          <LocationCard key={i} definition={definition} />
        ))}
      </CardGrid>
      <CardGrid style={{ pageBreakBefore: 'always' }}>
        {LOCATION_CARDS.slice(0, 3).map((definition, i) => (
          <LocationCard key={i} definition={definition} back />
        ))}
      </CardGrid>
    </div>
  );
  // return (
  //   <div
  //     style={{
  //       display: "flex",
  //       alignItems: "center",
  //       justifyContent: "center",
  //       height: "100vh",
  //       gap: 32,
  //     }}
  //   >
  //     <CardHand cards={SYN_CITY_CARDS.slice(0, 5)} />
  //   </div>
  // );
}

export default App;

const CardGrid: React.FC<{ children: ReactNode; style?: React.CSSProperties }> = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 64,
        paddingBlock: 64,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};
