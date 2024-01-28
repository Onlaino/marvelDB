import {Outlet, useLocation} from "react-router-dom";
import {motion} from "framer-motion";



export const pageVariants = {
		initial: {
			opacity: 0
		},
		in: {
			opacity: 1
		},
		out: {
			opacity: 0
		}
	};

export const pageTransition = {
		type: 'tween',
		ease: 'linear',
		duration: 0.8
	};



const AnimationLayout = () => {
	const { pathname } = useLocation();
	return (
		<motion.div
			key={pathname}
			initial="initial"
			animate="in"
			variants={pageVariants}
			transition={pageTransition}
		>
			<Outlet />
		</motion.div>
	);
};

export default AnimationLayout;
