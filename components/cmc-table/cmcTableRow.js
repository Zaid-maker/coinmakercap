import Image from 'next/image'
import More from '../../assets/svg/more'
import Star from '../../assets/svg/star'
import CoinNameRow from '../cmc-table/coinNameRow'
//import Rate from './rate'
import { useRouter } from 'next/router'

const styles = {
  tableRow: `text-white border-b border-gray-800 text-[0.93rem]`,
}

const CMCtableRow = ({
  starNum,
  coinName,
  coinIcon,
  coinSymbol = '---',
  price = '----',
  hRate = '---',
  dRate = '---',
  hRateIsIncrement,
  dRateIsIncrement,
  marketCapValue = '---',
  volumeValue = '---',
  volumeCryptoValue = '---',
  circulatingSupply = '---',
}) => {
  const graphImages = []

  const getRandomGraph = () => {}

  const router = useRouter()

  const viewCoinDetails = () => {}

  const viewPrice = () => {}

  const formatNum = (num) => {
    return Number(num.toFixed(2)).toLocaleString()
  }

  return (
    <tbody className={styles.tableRow}>
      <tr>
        <td>
          <Star />
        </td>
      </tr>
      <td>{starNum}</td>

      {coinIcon && coinIcon ? (
        <td className="cursor-pointer">
          <CoinNameRow
            name={coinName}
            icon={coinIcon}
            clicked={viewCoinDetails}
          />
        </td>
      ) : (
        <></>
      )}
    </tbody>
  )
}

export default CMCtableRow
