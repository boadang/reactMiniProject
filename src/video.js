import video_tiktok from './assets/video/video_tiktok.mp4';
import {useRef, useImperativeHandle, forwardRef} from 'react'; 

function Video(props, ref) {
    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    return (
        <video 
            ref = {videoRef}
            src = {video_tiktok} 
            width = {280}
        />
    )
}

export default forwardRef(Video);