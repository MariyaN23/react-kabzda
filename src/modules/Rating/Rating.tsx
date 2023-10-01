import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType)=>void
}

export function SecretRating(props: RatingPropsType) {
    console.log('Rating rendering')
    return (
        <div>
            <Star setRatingValue={props.setRatingValue} selected={props.value > 0} starNumber={1}/>
            <Star setRatingValue={props.setRatingValue} selected={props.value > 1} starNumber={2}/>
            <Star setRatingValue={props.setRatingValue} selected={props.value > 2} starNumber={3}/>
            <Star setRatingValue={props.setRatingValue} selected={props.value > 3} starNumber={4}/>
            <Star setRatingValue={props.setRatingValue} selected={props.value > 4} starNumber={5}/>
        </div>
    )
}

export const Rating = React.memo(SecretRating)

type StarPropsType = {
    selected: boolean
    setRatingValue: (value: RatingValueType)=>void
    starNumber: 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType) {
    return (
        <span onClick={()=>{props.setRatingValue(props.starNumber)}}>
            {props.selected ? <b>star </b> : "star"}
        </span>
    )
}

