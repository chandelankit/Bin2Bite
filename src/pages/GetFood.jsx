import FoodCard from "@/components/Foodcard";

const GetFood = () => {
  const data = [
    {
      url: "https://img-global.cpcdn.com/recipes/c639a4699ebae302/680x482cq70/meat-mix-local-food-ingredients-recipe-main-photo.jpg",
      text: "This food is prepared today and can be used by today. It is good quality tasty food.",
      heading: "Mix Veg + Rice ",

      Pincode: "325003",
      address: "iiit kota",
      contact_no: "9876632352",
    },
    {
      url: "data:image/jpeg;base64,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",
      text: "This food is prepared today and can be used by today. It is good quality tasty food.",
      heading: "Rajma chawal",

      Pincode: "325003",
      address: "iiit kota",
      contact_no: "9876632352",
    },
    {
      url: "https://i0.wp.com/www.sinamontales.com/dotcord/uploads/2009/11/kadhi-chawal-recipe.1024x1024-1.jpg?ssl=1",
      text: "This food is prepared today and can be used by today. It is good quality tasty food.",
      heading: "Kadi chawal",

      Pincode: "325003",
      address: "iiit kota",
      contact_no: "9876632352",
    },
    {
        url: "data:image/jpeg;base64,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",
        text: "This food is prepared today and can be used by today. It is good quality tasty food.",
        heading: "Biryani",
  
        Pincode: "325003",
        address: "iiit kota",
        contact_no: "9876632352",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBdK8a--1p-v-94liKGj9aabngTImKBg3lQ&usqp=CAU",
        text: "This food is prepared today and can be used by today. It is good quality tasty food.",
        heading: "Aloo Sabji",
  
        Pincode: "325003",
        address: "iiit kota",
        contact_no: "9876632352",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieImhAu4gIyWYrAVE3mRpgdUc8aBfigCGmw&usqp=CAU",
        text: "This food is prepared today and can be used by today. It is good quality tasty food.",
        heading: "Sev Tamatar",
  
        Pincode: "325003",
        address: "iiit kota",
        contact_no: "9876632352",
      },
  ];

  return (
    <div>
      <div className="container text-center ">
        <div className="flex justify-center align-middle">
          <h1 className=" text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-black mt-14">
            Delicious <span className="text-green-700"> Delights</span>
          </h1>
        </div>
        <p>
          Embark on a Culinary Adventure: Discover and Order the Most Delectable
          Food Experiences Near You! From cozy cafes to upscale restaurants,
          explore a diverse array of flavors and cuisines just around the
          corner. Savor every bite as you uncover hidden gems and indulge in the
          finest culinary creations your neighborhood has to offer!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 mt-6 pb-14">
          {data.map((datas) => {
            return <FoodCard card_detail={datas} key={datas.url} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default GetFood;
