import React, {useState} from 'react';
import BigCard from '../components/BigCard';
import Header from '../components/Header';
import IntroPanel from '../components/IntroPanel';
import SmallCard from '../components/SmallCard';
import {CD, BIGCARDS, SMALLCARDS, MIDCARDS, COLORS} from '../utils/datas';

interface panelListAttr {
    title: string;
    desc: string;
    codes: string;
    color?: string;
    background: string;
}

interface menuListAttr {
    subTitle: string;
    menuName: string[];
}

function Main(){
    const panelList: panelListAttr[] = [
        {
            title : 'HTML', 
            desc : 'The Language for building web pages',
            color : 'white',
            background : '#282A35',
            codes : CD.html
        },
        {
            title : 'CSS', 
            desc : 'The Language for styling web pages',
            background : '#D9EEE1', 
            codes : CD.css
        },
        {
            title : 'JavaScript', 
            desc : 'The Language for programming web pages',
            background : '#FFF4A3', 
            codes : CD.javascript
        },
        {
            title : 'PYTHON', 
            desc : 'A popular programming language',
            color : 'white', 
            background : '#282A35', 
            codes : CD.python
        },
        {
            title : 'SQL', 
            desc : 'A language for accessing databases',
            background : 'white', 
            codes : CD.sql
        }
    ]; 

    return (
        <div className='main-page'>
            <Header></Header>
            {panelList.map(o => <IntroPanel key={o.title} title={o.title} desc={o.desc} codes={o.codes} color={o.color} background={o.background}></IntroPanel>)}
            <div className='card-box'>
                <div className='card-wrapper'>
                    {BIGCARDS.map(o => <BigCard key={o.title} title={o.title} desc={o.desc} buttons={o.buttons} backgroundColor={o.backgroundColor}></BigCard>)}
                    {SMALLCARDS.map((t,i) => <SmallCard key={t} type='small' title={t} backgroundColor={COLORS[i % 5]}></SmallCard>)}
                    {MIDCARDS.map((t,i) => <SmallCard key={t} type='middle' title={t} backgroundColor={COLORS[i % 5]}></SmallCard>)}
                </div>
            </div>
        </div>
    );
}

export default Main;