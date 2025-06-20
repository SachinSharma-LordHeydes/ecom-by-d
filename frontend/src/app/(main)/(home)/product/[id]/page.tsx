// import ProductDetails from "@/components/pages/ProductDetails";

// const page = ({ params }: { params: { id: string } }) => {
//   const id = params.id;
//   return <ProductDetails id={id} />;
// };

// export default page;


import ProductDetails from "@/components/pages/ProductDetails";

const page = async ({ params }: { params: { id: string } }) => {
  // Await params if necessary (to satisfy Next.js typing/rules)
  const awaitedParams = await params;
  const id = awaitedParams.id;
  return <ProductDetails id={id} />;
};

export default page;
