import styled from 'styled-components';
import {useState} from "react";
import ProgressBar from "./components/ProgressBar";

const Wrapper = styled.article`
    min-width: 250px;
    border-radius: 32px;
    padding: 24px;
    background: white;
    box-shadow:
            0 2px 20px hsl(248deg 53% 40%);
    text-align: center;
`;

const Avatar = styled.img`
    display: block;
    width: 128px;
    height: 128px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: -64px;
    margin-bottom: 16px;
    border: 6px solid white;
`;

const Heading = styled.h2`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0;
`;

const Paragraph = styled.p`
    font-size: 1rem;
    font-weight: 300;
    color: hsl(0deg 0% 40%);
`;

function ContactCard({
                         avatarSrc,
                         name,
                         email,
                     }:{avatarSrc:string, name:string, email:string,}) {
    return (
        <Wrapper>
            <Avatar
                alt=""
                src={avatarSrc}
            />
            <Heading>{name}</Heading>
            <Paragraph>{email}</Paragraph>
        </Wrapper>
    );
}

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