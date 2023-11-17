import styles from '@/styles/components/QueryComponents/Conditions.module.css'

import Input from './Conditions/Input'
import Date from './Conditions/Date'
import Range from './Conditions/Range'

const column = {
  'Country Name': 'United States',
  'Country Code': 'USA',
  'Indicator Name': 'Enrolment in lower secondary education, both sexes (number)',
  'Indicator Code': 'UIS.E.2',
  'value': 12404923.0,
  'year': 2011
}

const Conditions = () => {
  return (
    <div className={styles.inputItem}>
      {Object.entries(column).map(([key, value], index) => {
        if (key === 'year') {
          return <Date key={index} label={key}/>
        }
        return <Input key={index} label={key} example={value}/>
      })}
    </div>
  )
}

export default Conditions;
