import styles from '../styles/Main.module.scss';

export default function Main({titles} : {titles: any}) {
    return (
        <section className={styles.main}>
            <div className={`${styles.container} container`}>
                <h1>{titles.title}</h1>
                <h2>{titles.subtitle}</h2>
                <a className='btn' href='#'>{titles.btn}</a>
            </div>
        </section>
    );
};