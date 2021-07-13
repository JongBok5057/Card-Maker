import React from 'react';
import styles from './preview.module.css';
import Card from '../card/card';

const preview = ({ cards }) => (
        <section className={styles.preview}>
            <h1 className={styles.title}>Card Preview</h1>
            <ul className={styles.cards}>
            {cards.map(card => (
            <Card card={card} />
            ))}
            </ul>
        </section>
    );

export default preview;