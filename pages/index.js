import { useAddress, useMetamask } from "@thirdweb-dev/react";
// import Main from '../components/Home'
import Hero from "../components/Home/Hero";
import TopNavbarLayout from "../layouts/TopNavbarLayout";
import Head from 'next/head'

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen`,
  button: `border border-[#282b2f] bg-gray-200 p-[0.8rem] text-xl font-semibold rounded-full cursor-pointer text-black hover:bg-black hover:text-white`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

export default function Home() {
  const connectWithMetamask = useMetamask();
  const address = useAddress();

  const Auth = () => {
    return (
      <div className={style.wrapper}>
        <Head>
          <title>SneakerSpeaker Login</title>
          <link rel="icon" type="image/png" sizes="32x32" href="favicon.png" />
        </Head>
        <div className="h-full w-full">
          <form className="rounded bg-[url('../assets/bg.png')] bg-cover bg-fixed bg-right-bottom bg-no-repeat shadow-md">
            <div className="flex items-center justify-between">
              <div className={style.walletConnectWrapper}>
                <h2 className="bold text-9xl">SNEAKER SPEAKER</h2>
                <button
                  onClick={connectWithMetamask}
                  className={style.button}
                >
                  Connect Metamask
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      {address ? (
        
        <TopNavbarLayout>
          <Head>
            <title>SneakerSpeaker</title>
            <link rel="icon" type="image/png" sizes="32x32" href="favicon.png" />
          </Head>
          <Hero />
        </TopNavbarLayout>
      ) : (
        Auth()
      )}
    </>
  );
}
