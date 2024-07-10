import React, { useMemo, useState } from 'react'
import { utils } from './utils';

const Demo = () => {
    const [count, setCount] = useState(0);
    const [items] = useState(utils)
    const seletedItem = useMemo(()=> items.find(item => item.isSelected), [items])
  return (
   <div>
    <h1>{count}</h1>
    <h1>Selected Item :{ seletedItem?.id }</h1>
    <button onClick={()=> setCount(count+1) }>
        Increment
    </button>
   </div>
  )
}

export default Demo