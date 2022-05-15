import Image from 'next/image'
//import More from '../../assets/svg/more'
//import Star from '../../assets/svg/star'
//import CoinNameRow from '../coinNameRow'
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
  return <div className={styles.tableRow}>CMCtableRow</div>
}

export default CMCtableRow
