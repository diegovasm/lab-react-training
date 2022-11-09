import { useState } from 'react';

function IdCard() {
  const [people, setPeople] = useState([
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date('1992-07-14'),
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
      alt: 'man',
    },
    {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: new Date('1988-05-11'),
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
      alt: 'woman',
    }
  ]);

  const cards = people.map((person, index) => {
    return (
      <section className="people-card" key={index}>
        <img src={person.picture} alt={person.alt} />
        <div>
            <div><b>First name:</b> {person.firstName}</div>
            <div><b>Last name:</b> {person.lastName}</div>
            <div><b>Gender:</b> {person.gender}</div>
            <div><b>Height:</b> {person.height}</div>            
            {/* <div><b>Birth:</b> {person.birth} </div> */}
        </div>
                    
      </section>
    );
  });

  return <div>{cards}</div>;
}

export default IdCard;
