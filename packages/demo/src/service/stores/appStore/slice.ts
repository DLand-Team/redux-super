import { createSliceE, PayloadAction } from "redux-eazy";
import names from "../names";
import { Pagination, QueryApiRes, SliceState } from "./model";

const initialState = (): SliceState => {
	return {
		title: "test",
		dataList: [],
		pagination: {
			pageNum: 1,
			pageSize: 1,
			total: 0,
		},
	};
};

const slice = createSliceE({
	name: names.appStore,
	stateInit: initialState,
	reducers: {
		setTitle(state, { payload }: PayloadAction<Partial<string>>) {
			state.title = payload;
		},
		setPagination(state, { payload }: PayloadAction<Partial<Pagination>>) {
			state.pagination = {
				...state.pagination,
				...payload,
			};
		},
		setDataList(state, action: PayloadAction<QueryApiRes["data"]>) {
			const { list = [], total = 0 } = action.payload ?? {};
			state.dataList = list;
			state.pagination = {
				...state.pagination,
				total,
			};
		},
	},
});

export default slice;
