'use client';

import { SimpleWidget } from "./SimpleWidget";
import {useAppSelector} from '@/store';

export const WidgetGrid = () => {
  const count = useAppSelector(state => state.counter.count);
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget label={'Counter'} title={count.toString()} subTitle='subtitle'  />
    </div>
  )
}
