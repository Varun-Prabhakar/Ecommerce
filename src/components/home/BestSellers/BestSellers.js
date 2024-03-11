import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img= "https://i.pinimg.com/originals/95/60/34/956034aed5a02783228c2b91629562a8.jpg"
          productName="Flower Base"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1012"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4bsaK_JIEMNv5x_1JmAt9esjbOvVEgbn_QhUoRJfVRxkw4CXG93InBqzlW0JSuKyvIPg&usqp=CAU"
          productName="New Backpack"
          price="180.00"
          color="Gray"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1013"
          img= "https://images.pexels.com/photos/6621326/pexels-photo-6621326.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          productName="Household materials"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1014"
          img="https://media.istockphoto.com/id/1045976056/photo/red-plastic-suitcase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=WL_7QCwRsNy8JXDWEg4Cjs5JDlWS-6p4Ho7lDBi75Eo="
          productName="Travel Bag"
          price="220.00"
          color="Black"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default BestSellers;
