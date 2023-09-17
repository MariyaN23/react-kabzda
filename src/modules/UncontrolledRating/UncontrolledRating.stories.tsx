import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledRating} from './UncontrolledRating';
import {Rating, RatingValueType} from '../Rating/Rating';

export default {
    title: 'Uncontrolled Rating stories',
    component: UncontrolledRating
}

const onChangeHandler = action('rating change inside component')

export const EmptyUncontrolledRating =()=> {
    return <UncontrolledRating defaultValue={0} onChange={onChangeHandler}/>
}

export const UncontrolledRating1 =()=> {return <UncontrolledRating defaultValue={1} onChange={onChangeHandler}/>}
export const UncontrolledRating2 =()=> { return<UncontrolledRating defaultValue={2} onChange={onChangeHandler}/>}
export const UncontrolledRating3 =()=> { return<UncontrolledRating defaultValue={3} onChange={onChangeHandler}/>}
export const UncontrolledRating4 =()=> {return <UncontrolledRating defaultValue={4} onChange={onChangeHandler}/>}
export const UncontrolledRating5 =()=> {return <UncontrolledRating defaultValue={5} onChange={onChangeHandler}/>}
