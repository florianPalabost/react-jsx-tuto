import { Box } from '@mui/material';
import { forwardRef, useEffect, useRef, useState } from 'react';

// export default function UseRef() {
//     const ref = useRef(null);

//     useEffect(() => {
//         // TODO: check ref.current is not null
//         console.log(ref.current.offsetHeight);
//     }, []);

//     return (
//         <Box ref={ref} onClick={() => ref.current.offsetHeight}>
//             <h2>UseRef</h2>
//             <p>
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat et incidunt, nostrum sequi quos
//                 doloremque obcaecati, tenetur perferendis veniam, facere amet illo velit? Tempora enim corporis optio
//                 facere? Inventore, at.
//             </p>
//         </Box>
//     );
// }

// use function COMPONENT_NAME to know which component is created else will be Anonymous
const ForwardedRefComponent = forwardRef(function ForwardedRefComponent({ anotherRef }, ref) {
    console.log(ref, 'ref in ForwardedRefComponent');
    console.log(anotherRef, 'another ref in ForwardedRefComponent');

    return (
        <div>
            <p ref={ref}>This is forwarded ref component</p>

            <div>
                <p ref={anotherRef}>Some another ref</p>
            </div>
        </div>
    );
});

export default function UseRef() {
    const ref = useRef(null);
    const paragraphOtherRef = useRef('two');

    return <ForwardedRefComponent ref={ref} anotherRef={paragraphOtherRef} />;
}
