import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'

const style = {
  wrapper: `transition bg-[#F4F4F2] flex-auto w-[16rem] h-[21.5rem] rounded-2xl overflow-hidden cursor-pointer  
  hover:border-2 hover:shadow-2xl hover:scale-110 hover:duration-300`,
  imageContainer: `h-2/3 w-full overflow-hidden flex justify-center items-center`,
  nftImage: `w-full object-cover bg-white`,
  nftLowerContainer: `flex h-1/4 flex-col justify-between p-4`,
  nftInfoContainer: `flex justify-between`,
  collectionTitle: `text-sm text-gray-500 dark:text-gray-400`,
  nftTitle: `text-sm font-bold`,
  priceContainer: `flex flex-col items-end justify-center space-y-1`,
  priceTitle: `text-xs font-light`,
  wethImageContainer: `flex items-center space-x-1`,
  priceValue: `text-sm font-semibold`,
  likesContainer: `flex items-center justify-end space-x-2`,
  heartIcon: `h-3 w-3 text-gray-500 dark:text-gray-400`,
  likeCounter: `text-xs text-gray-500 dark:text-gray-400`,
}

const NFTCard = ({ listing }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.imageContainer}>
        <Image
          className={style.nftImage}
          src={listing.asset.image}
          height={340}
          width={340}
          alt='nft'
        />
      </div>

      <div className={style.nftLowerContainer}>
        <div className={style.nftInfoContainer}>
          <div>
            {listing.asset.collection && (
              <div className={style.collectionTitle}>
                {listing.asset?.collection?.name}
              </div>
            )}

            <div className={style.nftTitle}>{listing.asset.name}</div>
          </div>

          <div className={style.priceContainer}>
            <div className={style.priceTitle}>Buy at</div>
            <div className={style.wethImageContainer}>
              <Image height={16} width={16} src='/weth-logo.svg' alt='weth' />
              <div className={style.priceValue}>
                {listing.buyoutCurrencyValuePerToken?.displayValue}
              </div>
            </div>
          </div>
        </div>

        <div className={style.likesContainer}>
          <AiOutlineHeart className={style.heartIcon} />
          <div className={style.likeCounter}>
            {listing.asset?.stats?.favorites ?? 0}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTCard
