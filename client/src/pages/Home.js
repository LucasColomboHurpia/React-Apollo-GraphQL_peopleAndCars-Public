import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PEOPLE } from '../graphql/queries';
import PersonForm from '../components/PersonForm';
import PersonCard from '../components/PersonCard';
import CarForm from '../components/CarForm';

const Home = () => {
  const { loading, error, data } = useQuery(GET_PEOPLE);

  console.log('TEST')

  if (loading) return <p>Loading...</p>;
  if (error) return console.log('home consolelog',error);

  const homeStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    width:'80vw',
    displat:'flex',
    textAlign:"center",
    margin:'auto'
  };

  const titleStyle = {
    padding: '10px 0', 
    textAlign: 'center',
    borderBottom: '1px solid #ddd',

  }

  return (
    <div style={homeStyle}>
      <h2 style={titleStyle}>People and their Cars</h2>
      <PersonForm />
      <CarForm />
      <h2 style={titleStyle}>Records</h2>
      {data.getPeople.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
};

export default Home;
