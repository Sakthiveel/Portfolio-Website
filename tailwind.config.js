/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        100:"100%",
        90:"90%",
        80:"80%",
        60:"60%",
        50:"50%"        
      },
      boxShadow: {
        lightGray: "0px 4px 16px 0px rgba(126, 153, 193, 0.20)",
      },
      colors: {
        BlueBtn_HoverColor: "#0B4BAA",
        BlueTextWhiteBtn_HoverColor: "#EBF2FD",
        WhiteTextDarkBlueBtn_HoverColor: "#3E4C60",
        BlackTextWhiteBtn_Hovercolor: "#F2F5F9",
        NavigationBtns_HoverColor: "#EBF2FD",
        BlueTextLink_HoverColor: "#EBF2FD",
      },
      textColor:{
        default :"#000",
      },
      fontSize: {             
        'fs-14': '14px',
        'fs-16': '16px',
        'fs-18': '18px',
        'fs-20': '20px',
        'fs-24': "24px",
        'fs-22': '22px',
        'fs-24': '24px',
        'fs-28': '28px'
      },
      fontWeight: {        
        xl:"700",
        l:"500",
        normal:"400",        
      }
    },
    screens: {
        'md'  : {'max':"1023px"},   
        'sm'  : {'max':"650px"},   
        // 'sm'  : {'max':"400px"}     
    },
    aspectRatio: {
      '16/10': '16/10',
      '4/4' : "4/4"
    }
  },
  plugins: [],
  important: true,
};