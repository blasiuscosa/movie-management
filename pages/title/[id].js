import Head from 'next/head'
import Header from '../../components/Header'
import Hero from '../../components/Hero';
import requests from '../../utils/requests'

function title({results}) {
  return (
    <div>
      <Head>
        <title>Movie Management</title>
        <meta name="description" content="Movie Management by Cosa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero results={results} />
    </div>
  );
}

export default title;

export async function getServerSideProps(context){
    const external_id = context.params.id;
    const genre = 'findMovie';
    const request = await fetch(`https://api.themoviedb.org/3/movie/${external_id}${requests[genre]?.url}`).then(res => res.json());

    return {
      props : {
        results: request
      }
    }

  }
