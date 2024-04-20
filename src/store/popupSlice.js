import { createSlice } from "@reduxjs/toolkit";

const initState = {
    show: false,
    title: ''
}

const popupSlice = createSlice({
    name: 'popup',
    initialState: initState,
    // 팝업창 열기/닫기 액션
    reducers: {
        popupAction: (state, action)=>{
            // state.show = true;
            state.show = action.payload.show; // 페일로드 => 전달값(true, false)
            state.title = action.payload.title;
        },
    },
});

export default popupSlice.reducer;
// 동작 내보내기
export const {popupAction} = popupSlice.actions;