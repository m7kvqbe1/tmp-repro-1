import React, { useState } from 'react'
import {
  DatePicker,
  DATEPICKER_PLACEMENT,
} from '@royalnavy/react-component-library'

import { Main } from '../../layouts'

export const Home = () => {
  const [startDate, setStartDate] = useState(new Date(2018, 0, 11))

  function handleOnChange(e: any) {
    console.log(e)
    setStartDate(e.startDate)
  }

  return (
    <Main>
      <pre>{startDate.toString()}</pre>

      <DatePicker
        startDate={startDate}
        onChange={handleOnChange}
        placement={DATEPICKER_PLACEMENT.BELOW}
        isOpen
      />
    </Main>
  )
}
