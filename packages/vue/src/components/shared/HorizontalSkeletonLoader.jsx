import { defineComponent } from 'vue';

import { keyframes } from '@emotion/css';
import { styled } from '@appbaseio/vue-emotion';

const skeletonAnimation = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const SkeletonLoader = styled('div')`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const SkeletonLine = styled('div')`
	width: 100%;
	height: 20px;
	background: linear-gradient(
		90deg,
		rgba(220, 220, 220, 0.5) 25%,
		rgba(240, 240, 240, 0.9) 50%,
		rgba(220, 220, 220, 0.5) 75%
	);
	background-size: 200% 100%;
	animation: ${skeletonAnimation} 1.5s infinite;
`;

export default defineComponent({
	name: 'HorizontalSkeletonLoader',
	render() {
		return (
			<SkeletonLoader>
				<SkeletonLine />
				<SkeletonLine />
				<SkeletonLine />
				<SkeletonLine />
			</SkeletonLoader>
		);
	},
});
