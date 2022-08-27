import { GrTextAlignLeft } from 'react-icons/gr'
import { BsFillBookmarkFill } from 'react-icons/bs'
import Dropdown from './Dropdown'

const style = {
  wrapper: `flex flex-col divide-y rounded-lg overflow-hidden border dark:divide-black dark:border-black`,
  icon: `h-5 w-5 text-gray-600`,
}

const NFTDetails = ({description, properties}) => {
  const dropdownData = [
    {
      title: 'Description',
      value: description,
      icon: <GrTextAlignLeft className={style.icon} />,
    },
    {
      title: 'Properties',
      value: null,
      icon: <BsFillBookmarkFill className={style.icon} />,
    },
  ]

  return (
    <div className={style.wrapper}>
      {dropdownData.map((item, index) => (
        <Dropdown key={index} title={item.title} icon={item.icon} value={item.value} />
      ))}
    </div>
  )
}

export default NFTDetails
