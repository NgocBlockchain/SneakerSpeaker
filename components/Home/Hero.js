import React from 'react'
import { useRouter } from 'next/router'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://wallpaperaccess.com/full/1231762.jpg')] before:bg-cover before:bg-center before:opacity-40 before:blur-sm bg-[#413F42]`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#F9F9F9] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {

    const router = useRouter()
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover, collect, and sell extraordinary NFTs
            </div>
            <div className={style.description}>
              SneakerSpeaker is a new NFT Sneaker Marketplace
            </div>
            <div className={style.ctaContainer}>

              <button className={style.accentedButton} onClick={() => router.push('/collections')}>Explore</button> 

              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>

          <div className="rounded-t-lg">
            <iframe height={412} width={412} className="w-312 h-312 rounded-t-md" src="https://cdn.rtfkt.com/assets/videos/cryptokicks/Base.mp4"/>
          </div>

            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://cdn.rtfkt.com/assets/products/cryptokicks/Base.jpg"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}>RTFKT x Nike Dunk Genesis 
                CRYPTOKICKS</div>
                <a
                  className="text-[#1868b7]"
                  href="../assets/bg.png"
                >96982A
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero