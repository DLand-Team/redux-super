import { AsyncThunk, AsyncThunkAction, EnhancedStore } from "@reduxjs/toolkit";
import { shallowEqual } from "react-redux";
import { SlicePro } from "src/utils/createSliceCustom";
import { WatchType } from "src/utils/createStore";
import useAppSelector from "./use-app-selector";

// type TupleHead<T extends any[]> = T[number];
// export type L2T<L, LAlias = L, LAlias2 = L> = [L] extends [never]
// 	? []
// 	: L extends infer LItem
// 	? [L?, ...L2T<Exclude<LAlias2, LItem>, LAlias>]
// 	: never;

export type PromiseType<T> = Promise<T>;
export type UnPromisify<T> = T extends PromiseType<infer U> ? U : never;
export type UnPayload<T> = T extends (
	arg: any
) => AsyncThunkAction<infer U, any, any>
	? U
	: never;
export type UnPayload2<T> = T extends (
	arg: any
) => AsyncThunk<infer U, any, any>
	? U
	: never;
export type UnReturn<T> = T extends (
	arg: any
) => AsyncThunkAction<any, any, any>
	? ReturnType<T>
	: never;

export type UnReturn2<T> = T extends (arg: any) => AsyncThunk<any, any, any>
	? ReturnType<T>
	: never;

const flatInjectHookCreater = <
	S extends {
		[key in keyof ReturnType<ReduxStore["getState"]>]: {
			watch: WatchType;
			thunks: { [k in keyof S[key]["thunks"]]: S[key]["thunks"][k] };
			slice: SlicePro;
		};
	},
	ReduxStore extends EnhancedStore
>(
	stores: S,
	reduxStore: ReduxStore
) => {
	type FlatStore<
		T extends keyof ReturnType<ReduxStore["getState"]>,
		P extends keyof ReturnType<ReduxStore["getState"]>[T]
	> = {
		slices: S[T]["slice"];
	} & S[T]["slice"]["actions"] & {
			[key in keyof S[T]["slice"]["computed"]]: (
				params: Parameters<S[T]["slice"]["computed"][key]>[1]
			) => ReturnType<S[T]["slice"]["computed"][key]>;
		} & {
			[K in keyof S[T]["thunks"]]: (
				payload?: Parameters<S[T]["thunks"][K]> extends any[]
					? Parameters<S[T]["thunks"][K]>[0]
					: undefined
			) => Promise<
				UnPromisify<ReturnType<UnReturn<S[T]["thunks"][K]>>> & {
					payload: UnPayload<S[T]["thunks"][K]>;
				} & { error?: any }
			>;
		} & Pick<ReturnType<ReduxStore["getState"]>[T], P>;

	const useFlatInject = <
		S extends keyof ReturnType<ReduxStore["getState"]>[T],
		T extends keyof ReturnType<ReduxStore["getState"]>,
		Keys extends Partial<Record<S, "IN">>
	>(
		storeNameBase: T | [T, string],
		keys?: Keys
	) => {
		const [storeName, branchName] = Array.isArray(storeNameBase)
			? [`${storeNameBase[0] as string}`, storeNameBase[1]]
			: [storeNameBase as string, undefined];
		const sliceName = `${storeName}${branchName ? "." + branchName : ""}`;
		const storeState = useAppSelector<ReturnType<ReduxStore["getState"]>>()(
			(state) => {
				if (keys && Object.keys(keys!)?.length) {
					let result = {};
					Object.keys(keys!).forEach((key) => {
						result[key] = state[sliceName][key];
					});
					return result;
				}
				return state[sliceName];
			},
			shallowEqual
		);
		const { thunks } = stores[storeName];
		const sliceTemp = Array.isArray(stores[storeName]["slice"])
			? //@ts-ignore
			  stores[storeName]["slice"].find((item) => {
					return item.branchName == branchName;
			  })
			: stores[storeName]["slice"];
		let thunkArr = {};
		let actionArr = {};
		let computed = {};
		// reducer
		for (let key in sliceTemp.actions) {
			let act = sliceTemp.actions[
				key as keyof typeof sliceTemp.actions
			] as any;
			actionArr = {
				...actionArr,
				[key]: (payload: never) => {
					return reduxStore.dispatch(act(payload));
				},
			};
		}
		// computed
		if (sliceTemp.computed) {
			for (let key in sliceTemp.computed || {}) {
				computed[key] = (params) => {
					return useAppSelector<ReturnType<ReduxStore["getState"]>>()(
						(state) => {
							return sliceTemp.computed![key](
								state[sliceName],
								params
							);
						},
						shallowEqual
					);
				};
			}
		}
		// thunk
		if (Array.isArray(thunks)) {
			const thunksItem = thunks.find((item) => {
				if (!item.branchName && !branchName) {
					return true;
				}
				return item.branchName == branchName;
			});
			if (thunksItem) {
				for (let key in thunksItem) {
					let thk = thunksItem[key as keyof typeof thunks] as any;
					thunkArr = {
						...thunkArr,
						[key]: (payload: never) => {
							if (
								typeof payload == "object" &&
								"payload" in payload
							) {
								//@ts-ignore
								payload.branchName = branchName;
							}
							return reduxStore
								.dispatch(thk(payload))
								.then((res: any) => {
									if (res.error) {
										let error = new Error(
											res.error.message
										);
										error.stack = res.error.stack;
										error.name = res.error.name;
										error.message = res.error.message;
										throw error;
									} else {
										return res;
									}
								});
						},
					};
				}
			}
		} else {
			for (let key in thunks) {
				let thk = thunks[key as keyof typeof thunks] as any;
				thunkArr = {
					...thunkArr,
					[key]: (payload: never) => {
						return reduxStore
							.dispatch(thk(payload))
							.then((res: any) => {
								if (res.error) {
									let error = new Error(res.error.message);
									error.stack = res.error.stack;
									error.name = res.error.name;
									error.message = res.error.message;
									throw error;
								} else {
									return res;
								}
							});
					},
				};
			}
		}

		return {
			slices: sliceTemp,
			...storeState,
			...thunkArr,
			...actionArr,
			...computed,
		} as FlatStore<T, keyof Keys>;
	};
	return useFlatInject;
};

export default flatInjectHookCreater;
