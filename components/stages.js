import React from 'react'
import {FSM} from 'react-fsm';

const commonProps = {
	key: 'value'
};

const Layout = ({children, currentStage, currentStagePayload}) => (
	<div>
		{children}
	</div>
);

const Stage = {
	Stage1: 'Stage1',
	Stage2: 'Stage2',
	Stage3: 'Stage3'
};

const formsMeta = {
	stages: {
		[Stage.Stage1]: ({transition}) => (
			<div onClick={() => transition(Stage.Stage2)}>
				Stage 1
			</div>
		),
		[Stage.Stage2]: ({transition}) => (
			<div onClick={() => transition(Stage.Stage3)}>
				Stage 2
			</div>
		),
		[Stage.Stage3]: ({finish}) => (
			<div onClick={() => finish()}>
				Stage 3
			</div>
		)
	},
	initialStage: Stage.Stage1,
	finalStage: Stage.Stage3
};

const Form = () => (
	<FSM
		meta={formsMeta}
		afterTransition={(currentStage, prevStage, payload) => {
			console.log(
				`We've made a transition to the stage ${currentStage}`,
				`From stage ${prevStage}`,
				`Received payload: ${payload}`
			);
		}}
		beforeTransition={(currentStage, nextStage, payload) => {
			console.log(
				`Try to make a transition to the stage ${nextStage}`,
				`From stage ${prevStage}`,
				`With payload: ${payload}`
			);

			return !!payload.hasCats;
		}}
		onFinish={(transitionsHistory) => {
			console.log(`Finish. History: ${transitionsHistory}`);
		}}
		commonProps={commonProps}
		Layout={Layout}
	/>
);

export default Form