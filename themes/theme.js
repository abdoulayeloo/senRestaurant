const themeColor = {
  red: {
    HEX: "#FF0000",
    HSL: "hsl(0, 100%, 50%)",
    RGBA: opacity=>`rgba(255, 0, 0, ${opacity})`,
  },
  black: {
    HEX: "#000000",
    HSL: "hsl(0, 0%, 0%)",
    RGBA: opacity=>`rgba(0, 0, 0, ${opacity})`,
  },
  white :{
    HEX: "#FFFFFF",
    HSL: "0,0,1",
    RGBA: opacity => `rgba(255, 255,255,${opacity})`

  }
}

export default themeColor;