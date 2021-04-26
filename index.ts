//this needs to be put at the top of index.d.ts 

declare enum ChannelTypes { //The s at the end is the important bit! This solution is found inside of index.d.ts
  text = 0,
  dm = 1,
  voice = 2,
  group = 3,
  category = 4,
  news = 5,
  store = 6,
  unknown = 7,
}


//Due to the fact that enumerated types are unable to be extended (in the sense of inheiriting from an already existing enumerated type), it is impossible to resolve the fact that ChannelType exists at the root of discord.js. Alternatively, we use ChannelTypes to craft a new enumerated type that will appear inside of the Discord module and will not cause an error. 