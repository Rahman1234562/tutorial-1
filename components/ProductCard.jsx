import Link from 'next/link';
import React from 'react';
import { Card } from 'antd';
import {AiOutlineHeart} from 'react-icons/ai'
const { Meta } = Card;

const ProductCard = () => {
  return (
   
    <Link href="/product/1">
      {/* <img className="image" src="/iphone.png" alt="product image"/> */}
      <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={< img className="image" src="/images.jpg" alt="product image"/>}
  >
    <AiOutlineHeart className="icon"/>
    <Meta title="IPHONE MOBILE" description="THIS IS IPHONE BRAND" />
  </Card>

    </Link>
  )
}

export default ProductCard;


