import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import apiServices from '../services/requestHandler';
const initialState = {
  loading: false,
  getClaimsListData: [],
  getClaimLoading: false,
  getclaimDataId: [],modalToggle:false,userLoader:false,userData:[]
};

export const userlist: any = createAsyncThunk(
  'userlist',
  async (data, thunkAPI) => {
    const res = await apiServices.userlist();

    console.log(res, 'res');

    try {
      if (res?.status == 200) {
        return res?.data
      }
    } catch (error) {
      const err: any = thunkAPI.rejectWithValue(error);
      if (err?.payload?.status !== 200) {
        // SnackbarUtils.error(err?.payload?.data?.message, false);
      }
    }
  },
);
export const userGet: any = createAsyncThunk(
  'userGet',
  async (data, thunkAPI) => {
    const res = await apiServices.userGet(data);

    console.log(res, 'res');

    try {
      if (res?.status == 200) {
        return res?.data
      }
    } catch (error) {
      const err: any = thunkAPI.rejectWithValue(error);
      if (err?.payload?.status !== 200) {
        // SnackbarUtils.error(err?.payload?.data?.message, false);
      }
    }
  },
);
const userSlice = createSlice({
  name: 'User Slice',
  initialState: initialState,
  reducers: {
    toggleEditClaim: (state: any, { payload }) => {
      state.isEdit = payload;
    },
    modalFuc:(state:any,{ payload }:any)=>{
state.modalToggle=payload
    },
  },
  extraReducers: {
   
    [userGet.pending]: (state: any) => {
      state.userLoader = true;
    },
    [userGet.fulfilled]: (state: any, { payload }: any) => {
      state.userLoader = false;
      state.userData = payload;
      console.log(payload, 'payload');
    },
    [userGet.rejected]: (state: any) => {
      state.userLoader = false;
    },
    [userlist.pending]: (state: any) => {
      state.getClaimLoading = true;
    },
    [userlist.fulfilled]: (state: any, { payload }: any) => {
      state.getClaimLoading = false;
      state.getclaimDataId = payload;
      console.log(payload, 'payload');
    },
    [userlist.rejected]: (state: any) => {
      state.getClaimLoading = false;
    },
  },
});
export const {modalFuc}:any=userSlice.actions
export const userReducer = userSlice.reducer;
