import { useState, useEffect } from 'react'
import MainContainer from '@/components/MainContainer'
import styles from '../styles/aPanel.module.scss';
import HeaderTitlesWrap from '@/components/AP-headerTitles-wrap';
import BlockTitlesWrap from '@/components/AP-blockTitlesWrap';
import FooterTitlesWrap from '@/components/AP-footerTitlesWrap';
import { useSession } from "next-auth/react"


export default function Login({ header, titles, footer } : {header: any, titles: any, footer: any}) {
    const { data: session } = useSession()
    header = header.header;
    titles = titles.titles;
    footer = footer.footer;

    return (
        <MainContainer title='Admin Panel' headerTitles={header[0]} footerTitles={footer[0]}>
            <section className={styles.panel}>
                <div className={`${styles.container} container`}>
                    {!session ?
                        <h3>Access denied</h3>
                        :
                        <>
                            <h3>Here you can edit text</h3>
                            <HeaderTitlesWrap header={header}/>
                            <BlockTitlesWrap titles={titles} blockTitle='Main' objIdx='0' />
                            <BlockTitlesWrap titles={titles} blockTitle='About' objIdx='1' />
                            <FooterTitlesWrap footer={footer} />
                        </>
                    }
                </div>
            </section>
        </MainContainer>
    )
}

export async function getStaticProps() {
    const headerResponce = await fetch(`${process.env.API_URL}/header`)
    const header = await headerResponce.json()
    const titleResponce = await fetch(`${process.env.API_URL}/titles`)
    const titles = await titleResponce.json()
    const footerResponce = await fetch(`${process.env.API_URL}/footer`)
    const footer = await footerResponce.json()
    return {
      props: { header, titles, footer },
    }
  }