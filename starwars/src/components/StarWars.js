import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from "styled-components";
import GetAxios from "./GetAxios";

const StarWarsCard = styled.div
`
    background-color: lightblue;
    width: 400px;
    display: flex;
    flex-flow: column nowrap;
    border-radius: 10%;
    border: 1px solid black;
    margin: 10px;
`
const Name = styled.h2
`

`
const Birthday = styled.h4
`

`
const Bio = styled.div
`
`
// const Ships = styled.div
// `

// `
const StarWars = props => {
    return(
        <StarWarsCard>
            <Name>{props.name}</Name>
            <Birthday>Birth Year: {props.birthYear}</Birthday>
            <Bio>
                <p>Height: {props.height}cm</p>
                <p>Weight: {props.mass}kg</p>
                <p>Hair Color: {props.hair}</p>
                <p>Eye Color: {props.eye}</p>
                <p>Skin Color: {props.skin}</p>
                <p>Gender: {props.gender}</p>
                {/* {props.species.map((item, index) => {
                    return GetAxios(item).title;
                })}
                Home World: {GetAxios(props.homeWorld).name}
                Appears in: {props.films.map((item, index) => {
                    return GetAxios(item).title;
                })} */}
            </Bio>
            {/* <Ships>
                {props.ships.map((item, index) => {
                    return GetAxios(item).name;
                })}
                {props.vehicles.map((item, index) => {
                    return GetAxios(item).name;
                })}
            </Ships> */}
        </StarWarsCard>
    );
};

export default StarWars;