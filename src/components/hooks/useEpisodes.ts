import React, { SetStateAction, Dispatch } from "react";
import { Character } from "../../Model";
import { useData } from "./useData";

export const useCharacters = (): [Character[], Dispatch<SetStateAction<Character[]>>] => {
  const [characters, setCharacters] = useData<Character[]>(`characters`,[] as Character[]);
  return [characters, setCharacters, ];
};