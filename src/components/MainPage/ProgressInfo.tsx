import React from 'react';
import GIF from '../../assets/image/process.gif';
import { ProgressInfoContainer, ProgressStepBox } from './styles';

const progressInfo = [
  { name: 'Input Text', desc: 'Just type your document or text' },
  { name: 'Convert', desc: 'We convert text to video!' },
  { name: 'Just Play', desc: "It's time to watch, stop reading!" },
];

function ProgressStep({
  stepData,
}: {
  stepData: { name: string; desc: string };
}): JSX.Element {
  return (
    <ProgressStepBox>
      <h4>{stepData.name}</h4>
      <p>{stepData.desc}</p>
    </ProgressStepBox>
  );
}

export default function ProgressInfo(): JSX.Element {
  return (
    <ProgressInfoContainer>
      <div className="inner">
        <article>
          <h2>The process of TTV A.I</h2>
          <ul>
            {progressInfo.map(stepData => (
              <ProgressStep key={stepData.name} stepData={stepData} />
            ))}
          </ul>
        </article>
        <img src={GIF} alt="animation_gif" />
      </div>
    </ProgressInfoContainer>
  );
}
