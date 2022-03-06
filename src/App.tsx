import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { RootObject, Character } from "./Model";
import {CircularProgress } from '@material-ui/core';
import CardImg from './components/card';
import Skeleton from '@mui/material/Skeleton';
import { useBetween } from 'use-between';

// const People=[
// {name:"Alhagie", surname:"Singhateh", desk:"desk 1", imgUrl:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"},
//  {name:"Federico", surname:"partesiano",desk:"desk 2" , imgUrl:"https://media.gettyimages.com/photos/-picture-id1149415456?s=2048x2048"},
// {name:"marco", surname:"Parisi",desk:"desk 3" , imgUrl:"https://st.depositphotos.com/1006706/2671/i/600/depositphotos_26715369-stock-photo-which-way-to-choose-3d.jpg"},
// ]


function App() {
  const [characters, setCharacter]= useState<Character[] | null>(null);
  const [favorites, setFavorites]= useState<Character[]>([]);
  // const [deletedCharacter, setDeletedCharacter]= useState<number | null>(null);

  let [isFull, setIsFull]=  useState<boolean>(false)

  const deleteItem=(id: number)=>{
    if (!characters) return;
    const index = characters.findIndex(({id: idCharacter}) => id ===idCharacter);
  if(index!==-1){
    characters.splice(index, 1);
    setCharacter([...characters]);
    }
  }
  const addToFavorites=(id:number)=>{
    if (!characters) return;
    const index = characters.findIndex(({id: idCharacter}) => id ===idCharacter);
  if(index!==-1){
    const result= characters.splice(index, 1);
    setCharacter([...characters]);
     setFavorites([...favorites, ...result])
    }
    
  }

  const getData= async () =>{
      const responceFetch= await fetch('https://rickandmortyapi.com/api/character');
        const {results}= await responceFetch.json() as RootObject;
        setCharacter(results)
        setIsFull(true)
  }

  // useEffect(() => {
  //   characters && setCharacter(characters.filter(({id: idCharacter}) =>idCharacter !== deletedCharacter ));

  // }, [deletedCharacter])

    React.useEffect( ()=>{
    setTimeout(()=>{
      getData()
    }, 3000)
    }, [])
  return (
  <>
      <div className='flex'>
        {!isFull ? 
          <div className='load'>
            <div>
              < CircularProgress />
            </div>
            <div className='loadflex'>
              {Array.from({length: 5}, (_, index) => 
                <span key={index} className='singleSkeleton'>
                  <Skeleton animation="wave"   variant="rectangular" width={300} height={300} />
                  <Skeleton animation="wave"  variant="text" width={210} height={20} />
                  <Skeleton animation="wave"  variant="text" width={150} height={20} />
                </span>
              )}
            </div>
          </div>:
          // characters && characters.map((character)=><div key={character.id} onClick={() => deleteCharacter(character.id)}>< CardImg   key={character.id} props= {character} /></div>) 
            <div>
              {
                  <h1 className='center'>All</h1>
                }
              <div className='loadflex'>
                {
                  characters && characters.map((character)=>< CardImg   key={character.id} character= {character} addOnClick={addToFavorites} deleteOnClick={deleteItem}/>) 
                }
              </div>
              {
                  <h1 className='center'>Favorites</h1>
                }
              <div className='loadflex'>
                {
                  favorites && favorites.map((favorite, index)=>< CardImg   key={index} character= {favorite} addOnClick={addToFavorites} deleteOnClick={deleteItem} />) 
                }
              </div>
            </div>
        }
      </div>
  </>
  );
  }

export default App;
