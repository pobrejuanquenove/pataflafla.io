'use client';

import { useAppDispatch, useAppSelector } from '@/store';
import {
  addOne,
  initCounterState,
  substractOne,
} from '@/store/counter/counterSlice';
import { useEffect } from 'react';

interface Props {
  value?: number;
}

export interface CounterResponse {
  method: string;
  count: number;
}
const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then((res) => res.json());
  return data;
};

export const Counter = ({ value = 0 }: Props) => {
  //const [counter, setCounter] = useState(value);
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  // value recibido desde la store
  // useEffect(() => {
  //   dispatch( initCounterState(value))
  // }, [dispatch, value])

  // value recibido desde la API
  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);

  const clickHandler = () => {
    return {
      increase: () => {
        dispatch(addOne());
      }, //setCounter(counter + 1)},
      decrease: () => {
        dispatch(substractOne());
      }, //setCounter(counter - 1),
    };
  };
  return (
    <>
      <p className="text-2xl">
        In this example, the title page (server metadata) was rendered from the
        server, and the counter component was rendered in the client. server
        side components are rendered only one time, that&rsquo;s awesome!
      </p>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          onClick={clickHandler().increase}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={clickHandler().decrease}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
