import { type FC } from 'react';
import { TIconProps } from '../../core/type';

export const CheckboxIcon: FC<TIconProps & {checked?: boolean}> = ({fill='#000', size=24, checked=false}) => (
    <svg width={size} height={size} viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        {checked ? (
            <>
                <path d="M524.444 647.32H83.5406V206.417H454.841L538.381 122.875H0V730.861H607.978V689.091V505.853L524.444 589.395V647.32Z" fill={fill}/>
                <path d="M248.286 255.175L162.366 341.111L302.241 480.972L388.161 566.906L474.081 480.972L800 155.073L714.066 69.139L388.173 395.036L248.286 255.175Z" fill={fill}/>
            </>
        ) : (
            <>
                <path fillRule="evenodd" clipRule="evenodd" d="M607.978 133H0V740.986H607.978V699.216V133ZM83.5406 657.445H524.444V216.542H83.5406V657.445Z" fill={fill}/>
            </>
        )}
    </svg>
)
