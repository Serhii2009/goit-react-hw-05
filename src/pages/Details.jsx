// import { useEffect, useState } from "react";
// import { getMovieDetails } from "../api";

// const Details = ({ match }) => {
//   const [movie, setMovie] = useState(null);
//   const { id } = match.params;

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const data = await getMovieDetails(id);
//         setMovie(data);
//       } catch (error) {
//         console.error("Помилка при отриманні деталей фільму:", error);
//       }
//     };

//     fetchMovieDetails();
//   }, [id]);

//   if (!movie) {
//     return <div>Завантаження...</div>;
//   }

//   return (
//     <div>
//       <h1>
//         {movie.title} ({movie.year})
//       </h1>
//       <p>User Score: {movie.userScore}%</p>
//       <p>Overview: {movie.overview}</p>
//       <p>Genres: {movie.genres.join(" ")}</p>
//     </div>
//   );
// };

// export default Details;

// ------------

// import { useSearchParams } from "react-router-dom";
// import { ProductList } from "../components/ProductList";
// import { SearchBox } from "../components/SearchBox";
// import { getProducts } from "../api";

// export default function Products() {
//   const products = getProducts();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const productName = searchParams.get("name") ?? "";

//   const visibleProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(productName.toLowerCase())
//   );

//   const updateQueryString = (name) => {
//     const nextParams = name !== "" ? { name } : {};
//     setSearchParams(nextParams);
//   };

//   return (
//     <main>
//       <SearchBox value={productName} onChange={updateQueryString} />
//       <ProductList products={visibleProducts} />
//     </main>
//   );
// }
