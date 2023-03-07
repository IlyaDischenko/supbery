import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  menu: {
    salad: [
      {
          id: 1,
          title: "Лепешка с томленой говядиной",
          gram: "150",
          price: 300,
          photo: "",
      },
      {
          id: 2,
          title: "Ассорти мясных деликатесов",
          gram: "160/30",
          price: 520,
          photo: "",
      },
      {
          id: 3,
          title: "Хрустящие пирожки из ягненка с хрустящей аджикой",
          gram: "180",
          price: 330,
          photo: "",
      },
      {
          id: 4,
          title: "Карпачо из говядины на соусе тапенад",
          gram: "200",
          price: 420,
          photo: "",
      },
      {
          id: 5,
          title: "Запечёный сыр Бри с хрустящими гренками",
          gram: "200",
          price: 500,
          photo: "",
      },
      {
          id: 6,
          title: "Паштет из куриной печени с тартаром из айвы",
          gram: "150",
          price: 250,
          photo: "",
      },
      {
          id: 7,
          title: "Паштет из копчёного леща",
          gram: "150",
          price: 250,
          photo: "",
      },
      {
          id: 8,
          title: "Пикантный салат с морепродуктами и вялеными томатами",
          gram: "200",
          price: 470,
          photo: "",
      },
      {
          id: 9,
          title: "Зелёный салат с овечьим сыром",
          gram: "200",
          price: 400,
          photo: "",
      },
      {
          id: 10,
          title: "Цезарь с креветками",
          gram: "200",
          price: 470,
          photo: "",
      },
      {
          id: 11,
          title: "Цезарь с лососем",
          gram: "200",
          price: 570,
          photo: "",
      },
      {
          id: 12,
          title: "Цезарь с куриной грудкой",
          gram: "220",
          price: 380,
          photo: "",
      },
      {
          id: 13,
          title: "Салат из куриной печени с запеченой сливой",
          gram: "250",
          price: 340,
          photo: "",
      },
      {
          id: 14,
          title: "Тёплый салат с уткой",
          gram: "210",
          price: 400,
          photo: "",
      },
      {
          id: 15,
          title: "Салат с лососем и соусом персилад и кискусом",
          gram: "220",
          price: 550,
          photo: "",
      },
      {
          id: 16,
          title: "Дуэт брускетт с ростбифом и лососем",
          gram: "180",
          price: 500,
          photo: "",
      },
  ],
    hot: [],
    soup: [],
    bread: [],
    showcase: [],
    dessert: [],
    bar: [],
    kids: [],
  }
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    // setNewsPageData: (state, action) => {
    //     state.newsPage = action.payload
    // },
  },
  // extraReducers: {  
  //   [get_all_items.pending]: (state) => {
  //   },
  // }
})

export const {  } = menuSlice.actions

export default menuSlice.reducer