import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectedPage } from "../app/utility/AppEnums";
import { Page } from "../app/types/AppTypes";

const initialState: Page = {
  selectedPage: SelectedPage.Home
}

const NavBarSlice = createSlice({
  name: "NavLinks",
  initialState: initialState,
  reducers: {
    setSelectedPage: (state, action: PayloadAction<SelectedPage>) => {
      state.selectedPage = action.payload
    }
  }
})

export const { setSelectedPage } = NavBarSlice.actions
export default NavBarSlice.reducer
