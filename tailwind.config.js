import withMT from "@material-tailwind/react/utils/withMT";
 
 export default withMT({
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
     extend: {
      colors: {
         zinc_50: "rgb(250, 250, 250)",
         zinc_100: "rgb(244, 244, 245)",
         zinc_200: "rgb(228, 228, 231)",
         zinc_300: "rgb(212, 212, 216)",
         zinc_400: "rgb(161, 161, 170)",
         zinc_500: "rgb(113, 113, 122)",
         zinc_600: "rgb(82, 82, 91)",
         zinc_700: "rgb(63, 63, 70)",
         zinc_800: "rgb(39, 39, 42)",
         zinc_900: "rgb(24, 24, 27)",
         zinc_950: "rgb(9, 9, 11)",
       },
     },
   },
   plugins: [],
 });
 