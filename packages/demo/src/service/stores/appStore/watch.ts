import { createMatcher } from "redux-eazy";
import { dp, getActionType } from "../..";
import { startAppListening } from "../../setup";

const watch = () => {
	startAppListening({
		type: getActionType("appStore").setPagination,
		effect: async () => {
			dp("appStore", "queryAct");
		},
	});
	// startAppListening({
	// 	matcher: createMatcher((action) => {
	// 		return action.type == `${getActionType("appStore").setPagination}`;
	// 	}),
	// 	effect: async () => {
	// 		dp("appStore", "queryAct");
	// 	},
	// });
};

export default watch;
