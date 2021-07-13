import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'Tomcandy',
            company: 'LG',
            theme: 'dark',
            title: 'Softwate Engineer',
            email: 'ljb0362@gmail.com',
            message: 'No pain no gain',
            fileName: 'Tomcandy',
            fileURL: null,
        },
        {
            id: '2',
            name: 'Mark',
            company: 'Samsung',
            theme: 'light',
            title: 'Softwate Engineer',
            email: 'ljb0362@gmail.com',
            message: 'No pain no gain',
            fileName: 'Tomcandy',
            fileURL: 'tomcandy.png'
        },
        {
            id: '3',
            name: 'Jane',
            company: 'KIA',
            theme: 'colorful',
            title: 'Softwate Engineer',
            email: 'ljb0362@gmail.com',
            message: 'No pain no gain',
            fileName: 'Tomcandy',
            fileURL: null,
        },
    ]);
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user) {
                history.push('/');
            }
        });
    });

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
                <div className={styles.container}>
                <Editor cards={cards}/>
                <Preview cards={cards}/>                
                </div>
            <Footer />
        </section>
    );
};

export default Maker;