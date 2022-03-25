import { getSession } from "next-auth/react";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";



export default function Home({products}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Clone</title>
      </Head>

      {/* HEADER */}
      <Header />
      <main>
        {/* Banner */}
        <div className="max-w-screen-2xl mx-auto">
          <Banner />
          {/* ProductFeed */}
          <ProductFeed products={products}/>
        </div>
      </main>
    </div>
  );
}

// below function asks Next.js to calculate on the server-side first and then deliver to the client
export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch('https://fakestoreapi.com/products')
  .then((res) => res.json());

  return {
    props: {
      products, 
      session
    }
  }
}
