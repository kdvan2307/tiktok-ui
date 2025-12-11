import { forwardRef } from 'react'
import Download from './videos/Download.mp4'

function Video (props , refx) {

    return (
        <video 
            ref={refx}
            src={Download}
            width={280}
        />
    )
}
export default forwardRef(Video)