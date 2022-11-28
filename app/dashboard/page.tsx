'use client';

import { useEffect } from 'react';

async function getDummyJsonData() {
  const res = await fetch('https://dummyjson.com/products');
  //return res.json();
}

export default async function Dashboard() {
 // const data = await getDummyJsonData();

  // useEffect(() => {
  //   console.log(data);
  // },[data]);
  
  return (
    <>
      <div>test</div>
    </>
  )
}