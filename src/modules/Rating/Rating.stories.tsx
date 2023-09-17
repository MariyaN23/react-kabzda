import { action } from '@storybook/addon-actions';

import React, {useState} from 'react';
import {Rating, RatingValueType} from './Rating';

export default {
    title: 'Rating stories',
    component: Rating
}

export const EmptyRating =()=> {
    return <Rating value={0}
                   setRatingValue={x=>x}/>
}

export const Rating1 =()=> {return <Rating value={1} setRatingValue={x=>x}/>}
export const Rating2 =()=> { return<Rating value={2} setRatingValue={x=>x}/>}
export const Rating3 =()=> { return<Rating value={3} setRatingValue={x=>x}/>}
export const Rating4 =()=> {return <Rating value={4} setRatingValue={x=>x}/>}
export const Rating5 =()=> {return <Rating value={5} setRatingValue={x=>x}/>}

export const RatingChanging =()=> {
    const [rating, setRating] = useState<RatingValueType>(5)
    return <Rating value={rating} setRatingValue={setRating}/>
}