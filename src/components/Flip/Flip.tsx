import { FC, useEffect, useRef, useState } from 'react';
import useFlip from '../../hooks/useFlip';
import './Flip.scss';

interface FlipProps {
    value: TimePart;
    label: TimePartLabel;
}

const Flip: FC<FlipProps> = ({ value, label }) => {
    const [firstRender, setFirstRender] = useState(true);
    const [before, setBefore] = useFlip(value.before);
    const [after, setAfter] = useFlip(value.after);

    const flipRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // if first render, don't animate
        if (firstRender) {
            setFirstRender(false);
        } else {
            // animate
            setBefore(value.before);
            setAfter(value.after);

            flipRef.current?.classList.add('animate');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value.before, value.after]);

    const handleAnimationEnd = () => {
        // set before to after
        setBefore(value.after);
        flipRef.current?.classList.remove('animate');
    };

    return (
        <div className="flip" ref={flipRef} onAnimationEnd={handleAnimationEnd}>
            <div className="clock" data-before={before} data-after={after}>
                <div className="spans">
                    <span></span>
                    <span></span>
                </div>
                <div className="card">
                    <span className="front">{before}</span>
                    <span className="back">{after}</span>
                </div>
            </div>

            <span className="label">{label}</span>
        </div>
    );
};

export default Flip;
