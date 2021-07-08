import React from 'react';
import styles from './preview.module.css';

const preview = (props) => {
    return (
        <section className={styles.preview}>
            <h1 className={styles.title}>Card Preview</h1>
        </section>
    );
};

export default preview;