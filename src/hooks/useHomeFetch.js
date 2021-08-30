
import { useState, useEffect } from "react";

import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results:0,
}

export const useHomeFetch = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page, searchTerm = "") => {
        try{
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);
            

            setState(prev => ({
                ...movies,
                results:
                page>1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))

        }catch(error){
            setError(true);
        }
        setLoading(false)
    } 

    useEffect(() => {
            fetchMovies(1);
    },[]);  //[] =>it is dependency array of useEffect we can set it anything means when we want to render our screen
                //if it is empty it will run once and our screen will render only once
             
  return { state,loading,error};
}