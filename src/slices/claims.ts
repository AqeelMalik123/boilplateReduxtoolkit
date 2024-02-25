import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import apiServices from '../services/requestHandler';
const initialState = {
  loading: false,
  getClaimsListData: [],
  getClaimLoading: false,
  getclaimDataId: [],modalToggle:false,userLoader:false,userData:[]
};

export const getClaimId: any = createAsyncThunk(
  'getClaimId',
  async (data, thunkAPI) => {
    const res = await apiServices.getclaimId();

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
const claimSlice = createSlice({
  name: 'Claim Slice',
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
    [getClaimId.pending]: (state: any) => {
      state.getClaimLoading = true;
    },
    [getClaimId.fulfilled]: (state: any, { payload }: any) => {
      state.getClaimLoading = false;
      state.getclaimDataId = payload;
      console.log(payload, 'payload');
    },
    [getClaimId.rejected]: (state: any) => {
      state.getClaimLoading = false;
    },
  },
});
export const {modalFuc}:any=claimSlice.actions
export const claimReducer = claimSlice.reducer;
