import Link from 'next/link';
import styles from '@/styles/Header.module.scss';
import LogInBtn from './logIn';
import { useSession, signIn } from "next-auth/react"


export default function Header({headerTitles}) {
    const { data: session } = useSession()
    return(
        <header className={styles.header}>
            <div className='container'>
                <nav>
                    <Link href='/'>
                        <span className='nav-link'>{headerTitles.MainPage}</span>
                    </Link>
                    {/* <LogInBtn /> */}
                    {!session ? 
                        <a href='' onClick={() => signIn()}>
                            <span className='nav-link'>{headerTitles.LoginPage}</span>
                        </a>
                        : 
                        <Link href='/admin-panel'>
                            <span className='nav-link'>{headerTitles.AdminPanel}</span>
                        </Link>
                    }
                </nav>
            </div>
        </header>
    );
};