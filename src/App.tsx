import {useState} from "react";
import ProgressBar from "./components/ProgressBar";
import Select from "./components/Select";

export type ProgressBarSize = 'small' | 'medium' | 'large';

const ProgressBarDemo = () => {
    const [progressBarVal, setProgressBarVal] = useState(50);
    const [progressBarSize, setProgressBarSize] = useState<ProgressBarSize>('large');
    return (
        <div>
            <header>Progress bar config</header>
            <section style={{paddingBottom: '10px'}}>
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
                <ProgressBar value={progressBarVal} size={progressBarSize}/>
            </section>
        </div>
    );
}

const SelectDemo = () => {
    const [text, setText] = useState('');
    const [options, setOptions] = useState(['Newest Releases', 'Price']);
    const [selectedOption, setSelectedOptions] = useState(options[0]);

    const addOption = (value: string) => setOptions([...options, value]);
    const clearOptions = () => setOptions([]);

    return (
        <div style={{paddingTop: '10px'}}>
            <header>Select config</header>
            <section style={{paddingBottom: '10px'}}>
                <input
                    style={{width: '70%'}}
                    type='text'
                    min={1}
                    value={text}
                    required={true}
                    onChange={e => setText(e.target.value)}
                ></input>
                <button
                    style={{width: '30%'}}
                    onClick={() => addOption(text)}>Add option</button>
                <br/>
                <button style={{width: '100%'}} onClick={clearOptions}>Clear all options</button>
            </section>
            <section>
                <Select
                    label={'Choose one:'}
                    value={selectedOption}
                    onChange={setSelectedOptions}>
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </Select>
            </section>
        </div>
    );
}

const App = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ProgressBarDemo/>
            <SelectDemo/>
        </div>
    );
}

export default App;