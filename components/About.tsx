import styles from '../styles/About.module.scss';

export default function About({titles} : {titles: any}) {
    return (
        <section className={styles.about}>
            <div className={`${styles.container} container`} >
                <h3>{titles.title}</h3>
                <p>{titles.text1}</p>
                <p>{titles.text2}</p>
            </div>
        </section>
    );
}; 