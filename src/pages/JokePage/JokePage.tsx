import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { axiosApi } from "../../axiosApi";
import { useJokesStore } from "../../store/useJokesStore";

export const JokePage = () => {
    const {category} = useParams();
    const {joke, getJoke} = useJokesStore();

    useEffect(() => {
        if (category) {
            getJoke(category)
        }
    },[category]);

    return(
        <div>
            Joke Category = {category}
            <p>{joke}</p>
        </div>
    )
} 