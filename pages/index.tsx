import MainContainer from '@/components/MainContainer'
import Main from '@/components/Main'
import About from '@/components/About';

export default function Home({ header, titles, footer } : {header:any, titles:any, footer:any}) {
  header = header.header;
  titles = titles.titles;
  footer = footer.footer;

  return (
    <MainContainer title='Main Page' headerTitles={header[0]} footerTitles={footer[0]}>
        <Main titles={titles[0]}/>
        <About titles={titles[1]}/>
    </MainContainer>
  )
}

export async function getStaticProps() {
  const headerResponce = await fetch(`http://localhost:3000/api/header`)
  const header = await headerResponce.json()
  const titleResponce = await fetch(`http://localhost:3000/api/titles`)
  const titles = await titleResponce.json()
  const footerResponce = await fetch(`http://localhost:3000/api/footer`)
  const footer = await footerResponce.json()
  return {
    props: { header, titles, footer },
  }
}
