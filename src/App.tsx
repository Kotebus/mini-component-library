import {useState} from "react";
import ProgressBar from "./components/ProgressBar";

export type ProgressBarSize = 'small' | 'medium' | 'large';

const App = () => {
    const [progressBarVal, setProgressBarVal] = useState(50);
    const [progressBarSize, setProgressBarSize] = useState<ProgressBarSize>('large');
    return (
        <>
            <div>
                <header>Progress bar config</header>
                <section style={{ paddingBottom: '10px' }}>
                    <select
                        style={{borderStyle: 'none'}}
                        value={progressBarSize}
                        onChange={event => {
                            setProgressBarSize(event.target.value as ProgressBarSize)
                        }}
                    >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                    {' '}
                    progress bar,
                    {' '}
                    <input
                        type='number'
                        min={0}
                        max={100}
                        value={progressBarVal}
                        onChange={e => setProgressBarVal(e.target.valueAsNumber)}
                    ></input>
                    % complete.
                </section>
                <section>
                    <ProgressBar value={progressBarVal} size={progressBarSize} />
                </section>
            </div>


            {/*<ContactCard*/}
            {/*    avatarSrc="https://courses.joshwcomeau.com/cfj-mats/cat-300px.jpg"*/}
            {/*    name="Mittens"*/}
            {/*    email="meow@gmail.com"*/}
            {/*/>*/}
        </>
    );
}

export default App;